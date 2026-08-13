import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  active: boolean
  phase: number
}

type RGB = [number, number, number]

const LIGHT_NODE: RGB = [29, 78, 216]
const LIGHT_LINK: RGB = [37, 99, 235]
const LIGHT_ACTIVE: RGB = [59, 130, 246]
const DARK_NODE: RGB = [165, 243, 252]
const DARK_LINK: RGB = [34, 211, 238]
const DARK_ACTIVE: RGB = [34, 211, 238]

const LINK_DIST = 150
const MOUSE_RADIUS = 180
const MAX_SPEED = 0.5

const rgba = (color: RGB, alpha: number) =>
  `rgba(${color[0]},${color[1]},${color[2]},${alpha})`

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let particles: Particle[] = []
    let raf = 0
    const mouse = { x: -9999, y: -9999 }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const isDark = () => document.documentElement.classList.contains('dark')

    const countFor = () => {
      const area = width * height
      return Math.max(40, Math.min(90, Math.floor(area / 16000)))
    }

    const createParticles = () => {
      const count = countFor()
      const activeCount = Math.min(5, Math.max(3, Math.round(count / 18)))
      const next: Particle[] = []
      for (let i = 0; i < count; i++) {
        next.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          r: i < activeCount ? 2.2 + Math.random() * 1.2 : 1 + Math.random() * 1.6,
          active: i < activeCount,
          phase: Math.random() * Math.PI * 2
        })
      }
      particles = next
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      createParticles()
    }

    const render = (time: number) => {
      const dark = isDark()
      const node = dark ? DARK_NODE : LIGHT_NODE
      const link = dark ? DARK_LINK : LIGHT_LINK
      const active = dark ? DARK_ACTIVE : LIGHT_ACTIVE

      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.5
            ctx.strokeStyle = rgba(link, alpha)
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        const pulse = p.active ? 0.65 + 0.35 * Math.sin(time / 1000 + p.phase) : 1
        if (p.active) {
          const glow = 0.08 * pulse
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
          g.addColorStop(0, rgba(active, glow))
          g.addColorStop(1, rgba(active, 0))
          ctx.fillStyle = g
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.fillStyle = rgba(node, p.active ? 0.75 * pulse : 0.5)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const frame = (time: number) => {
      for (const p of particles) {
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.hypot(dx, dy)
        if (dist < MOUSE_RADIUS && dist > 0.001) {
          p.vx += (dx / dist) * 0.02
          p.vy += (dy / dist) * 0.02
        }
        const speed = Math.hypot(p.vx, p.vy)
        if (speed > MAX_SPEED) {
          p.vx = (p.vx / speed) * MAX_SPEED
          p.vy = (p.vy / speed) * MAX_SPEED
        }
        p.x += p.vx
        p.y += p.vy
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20
      }
      render(time)
      raf = requestAnimationFrame(frame)
    }

    const start = () => {
      cancelAnimationFrame(raf)
      if (reducedMotion) {
        render(1000)
      } else {
        raf = requestAnimationFrame(frame)
      }
    }

    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) start()
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const onThemeChange = () => {
      if (reducedMotion) render(1000)
    }

    const themeObserver = new MutationObserver(onThemeChange)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })

    resize()
    start()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      themeObserver.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}

export default NeuralBackground
