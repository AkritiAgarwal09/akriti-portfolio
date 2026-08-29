import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function AuroraBackground({ theme }) {
  const canvasRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    let frame = 0
    let width = 0
    let height = 0
    let dpr = 1
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 }

    const blobs = [
      { x: 0.15, y: 0.2, r: 0.38, hue: 38, speed: 0.00018 },
      { x: 0.82, y: 0.15, r: 0.32, hue: 168, speed: 0.00014 },
      { x: 0.55, y: 0.72, r: 0.42, hue: 28, speed: 0.00012 },
      { x: 0.25, y: 0.78, r: 0.28, hue: 195, speed: 0.00016 },
    ]

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const move = (e) => {
      pointer.tx = e.clientX / width
      pointer.ty = e.clientY / height
    }

    const draw = (time) => {
      ctx.clearRect(0, 0, width, height)
      pointer.x += (pointer.tx - pointer.x) * 0.04
      pointer.y += (pointer.ty - pointer.y) * 0.04

      const isLight = theme === 'light'
      const baseAlpha = isLight ? 0.14 : 0.22

      blobs.forEach((blob, i) => {
        const t = time * blob.speed
        const ox = Math.sin(t + i * 1.7) * 0.06
        const oy = Math.cos(t * 0.8 + i * 2.1) * 0.05
        const px = (blob.x + ox + (pointer.x - 0.5) * 0.08) * width
        const py = (blob.y + oy + (pointer.y - 0.5) * 0.06) * height
        const radius = blob.r * Math.min(width, height)

        const grad = ctx.createRadialGradient(px, py, 0, px, py, radius)
        const sat = isLight ? 65 : 72
        grad.addColorStop(0, `hsla(${blob.hue}, ${sat}%, ${isLight ? 58 : 52}%, ${baseAlpha})`)
        grad.addColorStop(0.45, `hsla(${blob.hue + 20}, ${sat}%, ${isLight ? 50 : 45}%, ${baseAlpha * 0.5})`)
        grad.addColorStop(1, 'transparent')

        ctx.fillStyle = grad
        ctx.fillRect(0, 0, width, height)
      })

      if (!reduceMotion) frame = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', move, { passive: true })
    frame = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', move)
    }
  }, [theme, reduceMotion])

  return <canvas ref={canvasRef} className="aurora-canvas" aria-hidden="true" />
}
