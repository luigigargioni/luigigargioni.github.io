import React, { useEffect, useRef, lazy, Suspense } from 'react'
import { ThemeProvider } from 'style/themeProvider'

import { Navbar, Footer, Landing, ScrollProgress } from 'components'

const About = lazy(() =>
  import('components/About/About').then((m) => ({ default: m.About })),
)
const Skills = lazy(() =>
  import('components/Skills/Skills').then((m) => ({ default: m.Skills })),
)
const Education = lazy(() =>
  import('components/Education/Education').then((m) => ({
    default: m.Education,
  })),
)
const Experience = lazy(() =>
  import('components/Experience/Experience').then((m) => ({
    default: m.Experience,
  })),
)
const Services = lazy(() =>
  import('components/Services/Services').then((m) => ({ default: m.Services })),
)
const Contacts = lazy(() =>
  import('components/Contacts/Contacts').then((m) => ({ default: m.Contacts })),
)

export const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }

    const particles: Particle[] = []
    const count = 100
    const connectionDist = 150

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 2,
      })
    }

    let mouseX = -1000
    let mouseY = -1000
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 80) {
          p.x -= dx * 0.03
          p.y -= dy * 0.03
        }

        // Particelle bianche sulla parte sinistra (verde), verdi sul resto
        const isOnGreenSection = p.x < canvas.width * 0.35
        const particleColor = isOnGreenSection ? '#ffffff' : '#3fc337'
        const shadowColor = isOnGreenSection
          ? 'rgba(255,255,255,0.8)'
          : '#3fc337'

        ctx.shadowBlur = 20
        ctx.shadowColor = shadowColor
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.fill()
        ctx.shadowBlur = 0

        for (let j = i + 1; j < particles.length; j++) {
          const dx2 = particles[j].x - p.x
          const dy2 = particles[j].y - p.y
          const d = Math.sqrt(dx2 * dx2 + dy2 * dy2)
          if (d < connectionDist) {
            const isJ_OnGreen = particles[j].x < canvas.width * 0.35
            const lineColor =
              isOnGreenSection && isJ_OnGreen
                ? `rgba(255, 255, 255, ${(1 - d / connectionDist) * 0.6})`
                : `rgba(63, 195, 55, ${(1 - d / connectionDist) * 0.8})`

            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = lineColor
            ctx.lineWidth = 2
            ctx.stroke()
          }
        }
      })

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <ThemeProvider>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)',
        }}
      />
      <ScrollProgress />
      {/* <ThemeToggle /> */}
      <Navbar />
      <main>
        <Landing />
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <About />
          <Skills />
          <Experience />
          <Education />
          <Services />
          <Contacts />
        </Suspense>
      </main>
      <Footer />
    </ThemeProvider>
  )
}
