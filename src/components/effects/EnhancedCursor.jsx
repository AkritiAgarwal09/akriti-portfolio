import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

const TRAIL_COUNT = 6

export default function EnhancedCursor() {
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)
  const trailRefs = useRef([])

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 280, damping: 28, mass: 0.6 })
  const ringY = useSpring(y, { stiffness: 280, damping: 28, mass: 0.6 })
  const glowX = useSpring(x, { stiffness: 120, damping: 22, mass: 0.8 })
  const glowY = useSpring(y, { stiffness: 120, damping: 22, mass: 0.8 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    setEnabled(fine && !reduceMotion)
    if (!fine || reduceMotion) return undefined

    const positions = Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 }))
    let raf = 0

    const move = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
      const target = event.target?.closest?.('a, button, .tilt-card, .interactive, .magnetic')
      setHovering(Boolean(target))
    }

    const tick = () => {
      const cx = x.get()
      const cy = y.get()
      positions.forEach((pos, i) => {
        const prev = i === 0 ? { x: cx, y: cy } : positions[i - 1]
        pos.x += (prev.x - pos.x) * (0.35 - i * 0.04)
        pos.y += (prev.y - pos.y) * (0.35 - i * 0.04)
        const el = trailRefs.current[i]
        if (el) {
          el.style.transform = `translate(${pos.x}px, ${pos.y}px)`
        }
      })
      raf = requestAnimationFrame(tick)
    }

    const down = () => setClicking(true)
    const up = () => setClicking(false)

    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
    }
  }, [reduceMotion, x, y])

  if (!enabled) return null

  return (
    <>
      {Array.from({ length: TRAIL_COUNT }, (_, i) => (
        <div
          key={i}
          ref={(el) => { trailRefs.current[i] = el }}
          className="cursor-trail"
          style={{ '--trail-i': i }}
        />
      ))}
      <motion.div className="cursor-glow" style={{ x: glowX, y: glowY }} />
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div
        className={[
          'cursor-ring',
          hovering ? 'is-hovering' : '',
          clicking ? 'is-clicking' : '',
        ].filter(Boolean).join(' ')}
        style={{ x: ringX, y: ringY }}
      />
    </>
  )
}
