import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export default function TiltCard({ children, className = '' }) {
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const rx = useSpring(rotateX, { stiffness: 180, damping: 20 })
  const ry = useSpring(rotateY, { stiffness: 180, damping: 20 })

  const onMove = (event) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * 5)
    rotateX.set(py * -5)
  }

  const reset = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
    >
      {children}
    </motion.div>
  )
}
