import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export default function MagneticButton({
  href,
  children,
  className = '',
  onClick,
  ariaLabel,
  target,
  rel,
}) {
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 260, damping: 18 })
  const sy = useSpring(y, { stiffness: 260, damping: 18 })
  const Tag = href ? motion.a : motion.button

  const onMove = (event) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18)
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      className={`magnetic ${className}`}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      type={href ? undefined : 'button'}
    >
      {children}
    </Tag>
  )
}
