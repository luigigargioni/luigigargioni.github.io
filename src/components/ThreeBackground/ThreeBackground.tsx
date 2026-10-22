import React, { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { ParticleSystem, ParticleSystemConfig } from './particleSystem'
import './ThreeBackground.css'

interface ParticleSceneProps {
  isMobile: boolean
}

const ParticleScene: React.FC<ParticleSceneProps> = ({ isMobile }) => {
  const particleSystemRef = useRef<ParticleSystem | null>(null)
  const groupRef = useRef<THREE.Group>(null)
  const { size } = useThree()

  const config: ParticleSystemConfig = useMemo(
    () => ({
      particleCount: isMobile ? 50 : 150,
      particleSize: isMobile ? 1.5 : 2,
      particleColor: '#3fc337',
      connectionDistance: isMobile ? 8 : 12,
      mouseInfluence: 0.05,
      animationSpeed: 1,
    }),
    [isMobile],
  )

  useEffect(() => {
    if (!particleSystemRef.current) {
      particleSystemRef.current = new ParticleSystem(config)
      if (groupRef.current) {
        groupRef.current.add(particleSystemRef.current.getParticles())
        groupRef.current.add(particleSystemRef.current.getLines())
      }
    }

    return () => {
      if (particleSystemRef.current) {
        particleSystemRef.current.dispose()
        particleSystemRef.current = null
      }
    }
  }, [config])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (particleSystemRef.current) {
        const x = (event.clientX / size.width) * 2 - 1
        const y = -(event.clientY / size.height) * 2 + 1
        particleSystemRef.current.updateMousePosition(x, y)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [size])

  useFrame(() => {
    if (particleSystemRef.current) {
      particleSystemRef.current.update()
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0002
    }
  })

  return <group ref={groupRef} />
}

export const ThreeBackground: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="three-background">
      <Canvas
        camera={{ position: [0, 0, 50], fov: 75 }}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <ParticleScene isMobile={isMobile} />
      </Canvas>
    </div>
  )
}
