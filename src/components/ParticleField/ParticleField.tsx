import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

import {
  PARTICLE_COUNT,
  PARTICLE_COUNT_SMALL,
  SHAPE_OFFSETS,
  buildShapes,
} from './shapes'

/** Distance from the mouse ray within which particles are pushed away. */
const CURSOR_RADIUS = 0.95
/** How hard the cursor pushes. */
const CURSOR_FORCE = 0.045
/** How fast a pushed particle is pulled back to its place, and how much its speed is kept. */
const SPRING = 0.035
const DAMPING = 0.86
/**
 * Visible half-width, in world units, the layout is designed for (a 16:10
 * screen). On narrower ones the cloud shrinks with the text.
 */
const DESIGN_HALF_WIDTH = 5.97
/** Extra brightness of particles close to the cursor. */
const GLOW = 1.4

const smoothstep = (from: number, to: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - from) / (to - from)))
  return t * t * (3 - 2 * t)
}

const createDotTexture = () => {
  const dot = document.createElement('canvas')
  dot.width = dot.height = 64
  const ctx = dot.getContext('2d') as CanvasRenderingContext2D
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.4, 'rgba(255,255,255,.5)')
  gradient.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 64, 64)
  return new THREE.CanvasTexture(dot)
}

type Props = {
  /** Ids of the page sections, in order: the cloud takes one shape per section. */
  sectionIds: string[]
}

/**
 * Full-screen WebGL particle cloud that morphs from one shape to the next as
 * the page scrolls through its sections.
 *
 * The mouse acts on it in two ways: the whole cloud leans towards it, and the
 * particles close to the pointer are pushed away (and light up), then spring
 * back to their place.
 *
 * If WebGL is not available it renders nothing and the page works without it.
 */
export const ParticleField = ({ sectionIds }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement
    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
      })
    } catch {
      return undefined
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.z = 8

    // fewer particles on small screens, where the cloud is only a dimmed backdrop
    const small = window.innerWidth < 900
    const count = small ? PARTICLE_COUNT_SMALL : PARTICLE_COUNT
    const shapes = buildShapes(count)
    const positions = new Float32Array(shapes[0])
    // how far each particle has been pushed from its place, and its speed
    const displacement = new Float32Array(count * 3)
    const velocity = new Float32Array(count * 3)

    const baseColors = new Float32Array(count * 3)
    const green = new THREE.Color('#3fc337')
    const cyan = new THREE.Color('#4cc9ff')
    const color = new THREE.Color()
    for (let i = 0; i < count; i++) {
      color.copy(green).lerp(cyan, Math.random() * Math.random())
      baseColors.set([color.r, color.g, color.b], i * 3)
    }
    const colors = new Float32Array(baseColors)

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    const texture = createDotTexture()
    const material = new THREE.PointsMaterial({
      size: small ? 0.075 : 0.06,
      map: texture,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    const points = new THREE.Points(geometry, material)
    scene.add(points)

    let narrow = false
    // half of the visible width at the cloud's depth, in world units
    let halfWidth = 0
    const resize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      narrow = width < 900
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      halfWidth =
        Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) *
        camera.position.z *
        camera.aspect
    }
    resize()
    window.addEventListener('resize', resize)

    // pointer in normalised device coordinates (-1..1); null when it is away
    const pointer = new THREE.Vector2()
    let pointerActive = false
    let mouseX = 0
    let mouseY = 0
    const onPointerMove = (e: PointerEvent) => {
      mouseX = e.clientX / window.innerWidth - 0.5
      mouseY = e.clientY / window.innerHeight - 0.5
      pointer.set(mouseX * 2, -mouseY * 2)
      pointerActive = true
    }
    const onPointerLeave = () => {
      pointerActive = false
    }
    window.addEventListener('pointermove', onPointerMove)
    document.documentElement.addEventListener('pointerleave', onPointerLeave)

    const raycaster = new THREE.Raycaster()
    const ray = new THREE.Ray()
    const toLocal = new THREE.Matrix4()

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    // 0 while the first section is centred, 1 for the second, and so on;
    // fractional while scrolling from one to the next.
    const scrollProgress = () => {
      const center = window.scrollY + window.innerHeight / 2
      const mids = sections.map((s) => s.offsetTop + s.offsetHeight / 2)
      if (mids.length === 0 || center <= mids[0]) return 0
      for (let i = 0; i < mids.length - 1; i++) {
        if (center < mids[i + 1]) {
          const local = (center - mids[i]) / (mids[i + 1] - mids[i])
          return i + smoothstep(0.2, 0.8, local)
        }
      }
      return mids.length - 1
    }

    let frameId = 0
    let leanX = 0
    let leanY = 0
    const clock = new THREE.Clock()
    const render = () => {
      const time = reducedMotion ? 0 : clock.getElapsedTime()
      const progress = Math.min(scrollProgress(), shapes.length - 1)
      const index = Math.min(Math.floor(progress), shapes.length - 2)
      const mix = progress - index
      const from = shapes[index]
      const to = shapes[index + 1]
      // mid-transition the cloud swells slightly, as if it burst apart
      const burst = 1 + Math.sin(mix * Math.PI) * 0.35

      // whole cloud: lean towards the mouse, slide beside the text
      leanY += (mouseX * 0.6 - leanY) * 0.05
      leanX += (mouseY * 0.35 - leanX) * 0.05
      points.rotation.y = time * 0.08 + leanY
      points.rotation.x = 0.25 + leanX
      const offset =
        SHAPE_OFFSETS[index] +
        (SHAPE_OFFSETS[index + 1] - SHAPE_OFFSETS[index]) * mix
      const scale = narrow ? 1 : Math.min(1, halfWidth / DESIGN_HALF_WIDTH)
      points.scale.setScalar(scale)
      points.position.x = narrow ? 0 : offset * scale
      material.opacity = narrow ? 0.45 : 0.9

      // the mouse ray, in the cloud's own coordinates
      points.updateMatrixWorld()
      raycaster.setFromCamera(pointer, camera)
      ray
        .copy(raycaster.ray)
        .applyMatrix4(toLocal.copy(points.matrixWorld).invert())
      const { origin: o, direction: d } = ray

      for (let k = 0; k < count * 3; k += 3) {
        const wobble = Math.sin(time * 0.9 + k * 0.01) * 0.05
        const x = (from[k] + (to[k] - from[k]) * mix) * burst
        const y =
          (from[k + 1] + (to[k + 1] - from[k + 1]) * mix) * burst + wobble
        const z = (from[k + 2] + (to[k + 2] - from[k + 2]) * mix) * burst

        // push away from the ray, along the shortest line to it
        let glow = 0
        if (pointerActive) {
          const px = x + displacement[k] - o.x
          const py = y + displacement[k + 1] - o.y
          const pz = z + displacement[k + 2] - o.z
          const along = px * d.x + py * d.y + pz * d.z
          const ax = px - d.x * along
          const ay = py - d.y * along
          const az = pz - d.z * along
          const distance = Math.sqrt(ax * ax + ay * ay + az * az) + 1e-6
          if (distance < CURSOR_RADIUS) {
            const strength = 1 - distance / CURSOR_RADIUS
            const push = (strength * strength * CURSOR_FORCE) / distance
            velocity[k] += ax * push
            velocity[k + 1] += ay * push
            velocity[k + 2] += az * push
            glow = strength
          }
        }
        // spring back home
        for (let c = 0; c < 3; c++) {
          velocity[k + c] =
            (velocity[k + c] - displacement[k + c] * SPRING) * DAMPING
          displacement[k + c] += velocity[k + c]
        }
        positions[k] = x + displacement[k]
        positions[k + 1] = y + displacement[k + 1]
        positions[k + 2] = z + displacement[k + 2]

        const boost = 1 + glow * GLOW
        colors[k] +=
          (Math.min(1, baseColors[k] * boost + glow * 0.3) - colors[k]) * 0.15
        colors[k + 1] +=
          (Math.min(1, baseColors[k + 1] * boost + glow * 0.3) -
            colors[k + 1]) *
          0.15
        colors[k + 2] +=
          (Math.min(1, baseColors[k + 2] * boost + glow * 0.3) -
            colors[k + 2]) *
          0.15
      }
      geometry.attributes.position.needsUpdate = true
      geometry.attributes.color.needsUpdate = true

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(render)
    }
    render()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      document.documentElement.removeEventListener(
        'pointerleave',
        onPointerLeave,
      )
      geometry.dispose()
      material.dispose()
      texture.dispose()
      renderer.dispose()
    }
  }, [sectionIds])

  return (
    <canvas className="particle-field" ref={canvasRef} aria-hidden="true" />
  )
}
