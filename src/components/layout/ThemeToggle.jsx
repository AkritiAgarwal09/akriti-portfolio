import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton.jsx'

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <MagneticButton
      className="iconButton themeButton"
      onClick={(event) => onToggle(theme === 'dark' ? 'light' : 'dark', event)}
      ariaLabel={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -40, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 40, scale: 0.6 }}
          transition={{ duration: 0.18 }}
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </motion.span>
      </AnimatePresence>
    </MagneticButton>
  )
}
