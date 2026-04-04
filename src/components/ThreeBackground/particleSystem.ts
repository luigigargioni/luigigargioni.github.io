import * as THREE from 'three'

export interface ParticleSystemConfig {
  particleCount: number
  particleSize: number
  particleColor: string
  connectionDistance: number
  mouseInfluence: number
  animationSpeed: number
}

export class ParticleSystem {
  private particles: THREE.Points
  private particlePositions: Float32Array
  private particleVelocities: Float32Array
  private lines: THREE.LineSegments
  private linePositions: Float32Array
  private config: ParticleSystemConfig
  private mousePosition: THREE.Vector2
  private targetMousePosition: THREE.Vector2

  constructor(config: ParticleSystemConfig) {
    this.config = config
    this.mousePosition = new THREE.Vector2(0, 0)
    this.targetMousePosition = new THREE.Vector2(0, 0)

    const particleCount = this.config.particleCount
    this.particlePositions = new Float32Array(particleCount * 3)
    this.particleVelocities = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      this.particlePositions[i] = (Math.random() - 0.5) * 100
      this.particlePositions[i + 1] = (Math.random() - 0.5) * 100
      this.particlePositions[i + 2] = (Math.random() - 0.5) * 50

      this.particleVelocities[i] = (Math.random() - 0.5) * 0.02
      this.particleVelocities[i + 1] = (Math.random() - 0.5) * 0.02
      this.particleVelocities[i + 2] = (Math.random() - 0.5) * 0.02
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(this.particlePositions, 3),
    )

    const particleMaterial = new THREE.PointsMaterial({
      color: this.config.particleColor,
      size: this.config.particleSize,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })

    this.particles = new THREE.Points(particleGeometry, particleMaterial)

    const maxConnections = particleCount * 10
    this.linePositions = new Float32Array(maxConnections * 3)
    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(this.linePositions, 3),
    )

    const lineMaterial = new THREE.LineBasicMaterial({
      color: this.config.particleColor,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    })

    this.lines = new THREE.LineSegments(lineGeometry, lineMaterial)
  }

  getParticles(): THREE.Points {
    return this.particles
  }

  getLines(): THREE.LineSegments {
    return this.lines
  }

  updateMousePosition(x: number, y: number): void {
    this.targetMousePosition.set(x, y)
  }

  update(): void {
    this.mousePosition.lerp(this.targetMousePosition, 0.1)

    const positions = this.particles.geometry.attributes.position
      .array as Float32Array
    const particleCount = this.config.particleCount

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] += this.particleVelocities[i] * this.config.animationSpeed
      positions[i + 1] +=
        this.particleVelocities[i + 1] * this.config.animationSpeed
      positions[i + 2] +=
        this.particleVelocities[i + 2] * this.config.animationSpeed

      const dx = this.mousePosition.x * 50 - positions[i]
      const dy = this.mousePosition.y * 50 - positions[i + 1]
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 20) {
        const force = (20 - distance) / 20
        positions[i] += dx * force * this.config.mouseInfluence
        positions[i + 1] += dy * force * this.config.mouseInfluence
      }

      if (positions[i] > 50) positions[i] = -50
      if (positions[i] < -50) positions[i] = 50
      if (positions[i + 1] > 50) positions[i + 1] = -50
      if (positions[i + 1] < -50) positions[i + 1] = 50
      if (positions[i + 2] > 25) positions[i + 2] = -25
      if (positions[i + 2] < -25) positions[i + 2] = 25
    }

    positions.needsUpdate = true

    let lineIndex = 0
    const connectionDistance = this.config.connectionDistance

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      for (let j = i + 1; j < particleCount; j++) {
        const j3 = j * 3
        const dx = positions[i3] - positions[j3]
        const dy = positions[i3 + 1] - positions[j3 + 1]
        const dz = positions[i3 + 2] - positions[j3 + 2]
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (distance < connectionDistance) {
          this.linePositions[lineIndex++] = positions[i3]
          this.linePositions[lineIndex++] = positions[i3 + 1]
          this.linePositions[lineIndex++] = positions[i3 + 2]
          this.linePositions[lineIndex++] = positions[j3]
          this.linePositions[lineIndex++] = positions[j3 + 1]
          this.linePositions[lineIndex++] = positions[j3 + 2]
        }
      }
    }

    while (lineIndex < this.linePositions.length) {
      this.linePositions[lineIndex++] = 0
    }

    this.lines.geometry.attributes.position.needsUpdate = true
    this.lines.geometry.setDrawRange(0, lineIndex / 3)
  }

  dispose(): void {
    this.particles.geometry.dispose()
    ;(this.particles.material as THREE.Material).dispose()
    this.lines.geometry.dispose()
    ;(this.lines.material as THREE.Material).dispose()
  }
}
