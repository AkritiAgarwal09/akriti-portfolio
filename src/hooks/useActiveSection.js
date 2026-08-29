import { useEffect, useState } from 'react'
import { NAV } from '../data/navigation.js'

/** Track which section is currently in view for nav highlighting */
export function useActiveSection() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0.05, 0.2, 0.5] },
    )

    NAV.forEach(([, id]) => {
      const node = document.getElementById(id)
      if (node) observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])

  return active
}
