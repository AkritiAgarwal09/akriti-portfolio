import { useCallback, useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const THEME_STORAGE_KEY = 'akriti-portfolio-theme'

/** Dark/light theme with View Transitions API and localStorage persistence */
export function useTheme() {
  const reduceMotion = useReducedMotion()
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (event) => {
      if (window.localStorage.getItem(THEME_STORAGE_KEY)) return
      setThemeState(event.matches ? 'light' : 'dark')
    }
    media.addEventListener?.('change', onChange)
    return () => media.removeEventListener?.('change', onChange)
  }, [])

  const setTheme = useCallback(
    (next, event) => {
      const x = event?.clientX ?? window.innerWidth - 44
      const y = event?.clientY ?? 44
      document.documentElement.style.setProperty('--theme-x', `${x}px`)
      document.documentElement.style.setProperty('--theme-y', `${y}px`)

      const apply = () => {
        document.documentElement.dataset.theme = next
        document.documentElement.style.colorScheme = next
        window.localStorage.setItem(THEME_STORAGE_KEY, next)
        setThemeState(next)
      }

      if (!reduceMotion && document.startViewTransition) {
        document.startViewTransition(apply)
      } else {
        document.documentElement.classList.add('theme-fallback-transition')
        apply()
        window.setTimeout(
          () => document.documentElement.classList.remove('theme-fallback-transition'),
          360,
        )
      }
    },
    [reduceMotion],
  )

  return { theme, setTheme }
}
