import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function ScrollProgress() {
  const reduceMotion = useReducedMotion()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (reduceMotion) return undefined

    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [reduceMotion])

  if (reduceMotion) return null

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-bar" style={{ scaleX: progress }} />
    </div>
  )
}
