import { useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function Spotlight() {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return undefined

    const move = (e) => {
      document.documentElement.style.setProperty('--spot-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--spot-y', `${e.clientY}px`)
    }

    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [reduceMotion])

  if (reduceMotion) return null
  return <div className="spotlight" aria-hidden="true" />
}
