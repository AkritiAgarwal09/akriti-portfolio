import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '', prefix = '', decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.8 })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(reduceMotion ? value : 0)

  useEffect(() => {
    if (!inView || reduceMotion) {
      if (reduceMotion) setDisplay(value)
      return undefined
    }

    let start = null
    let raf = 0
    const duration = 950

    const tick = (time) => {
      if (!start) start = time
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduceMotion, value])

  return (
    <span ref={ref}>
      {prefix}
      {Number(display).toFixed(decimals)}
      {suffix}
    </span>
  )
}
