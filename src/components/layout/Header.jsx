import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { NAV } from '../../data/navigation.js'
import MagneticButton from '../ui/MagneticButton.jsx'
import TypedRole from '../ui/TypedRole.jsx'
import ThemeToggle from './ThemeToggle.jsx'

export default function Header({ theme, setTheme, active }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const jump = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="header-shell">
      <div className="header panel">
        <button className="brand" type="button" onClick={() => jump('hero')}>
          <span className="brandMark">AA</span>
          <span className="brandText">
            <strong>Akriti Agarwal</strong>
            <small>
              <TypedRole />
            </small>
          </span>
        </button>

        <nav className="desktopNav" aria-label="Primary navigation">
          {NAV.slice(1, -1).map(([label, id]) => (
            <button
              key={id}
              className={active === id ? 'navItem active' : 'navItem'}
              type="button"
              onClick={() => jump(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="headerActions">
          <ThemeToggle theme={theme} onToggle={setTheme} />
          <MagneticButton className="connect" href="#contact">
            Let’s Connect <ArrowUpRight size={14} />
          </MagneticButton>
          <button
            className="mobileMenuButton"
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={19} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobileMenuBackdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.aside
              className="mobileMenu panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 240, damping: 28 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mobileMenuTop">
                <span>Navigate</span>
                <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  <X size={19} />
                </button>
              </div>
              <nav>
                {NAV.map(([label, id], index) => (
                  <button
                    type="button"
                    key={id}
                    className={active === id ? 'mobileNavItem active' : 'mobileNavItem'}
                    onClick={() => jump(id)}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    {label}
                    <ArrowUpRight size={15} />
                  </button>
                ))}
              </nav>
              <div className="mobileMenuFooter">AI / ML Engineer · Data Scientist · Builder</div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
