import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { roles } from '../../data/roles.js'

export default function TypedRole() {
  const reduceMotion = useReducedMotion()
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState(reduceMotion ? roles[0] : '')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion) {
      setText(roles[0])
      return undefined
    }

    const target = roles[roleIndex]
    const doneTyping = text === target
    const doneDeleting = text === ''
    let delay = deleting ? 36 : 72
    if (doneTyping && !deleting) delay = 1300
    if (doneDeleting && deleting) delay = 220

    const timer = window.setTimeout(() => {
      if (doneTyping && !deleting) {
        setDeleting(true)
        return
      }
      if (doneDeleting && deleting) {
        setDeleting(false)
        setRoleIndex((index) => (index + 1) % roles.length)
        return
      }
      setText((current) => (deleting ? current.slice(0, -1) : target.slice(0, current.length + 1)))
    }, delay)

    return () => window.clearTimeout(timer)
  }, [text, deleting, roleIndex, reduceMotion])

  return (
    <span className="typed-role">
      {text}
      <i aria-hidden="true" />
    </span>
  )
}
