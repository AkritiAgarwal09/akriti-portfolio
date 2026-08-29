import { motion, useReducedMotion } from 'framer-motion'

export default function HeroOrbital({ portraitSrc, portraitAlt = '' }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="hero-orbital" aria-hidden={portraitSrc ? undefined : true}>
      <div className="orbital-core">
        {portraitSrc ? (
          <img className="orbital-portrait" src={portraitSrc} alt={portraitAlt} />
        ) : (
          <>
            <div className="orbital-grid" />
            <div className="orbital-pulse" />
          </>
        )}
      </div>
      {!reduceMotion && (
        <>
          <motion.div
            className="orbital-ring ring-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          >
            <span className="orbital-node" />
          </motion.div>
          <motion.div
            className="orbital-ring ring-2"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          >
            <span className="orbital-node node-2" />
            <span className="orbital-node node-3" />
          </motion.div>
          <motion.div
            className="orbital-ring ring-3"
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          >
            <span className="orbital-node node-4" />
          </motion.div>
        </>
      )}
      <div className="orbital-float f1" />
      <div className="orbital-float f2" />
      <div className="orbital-float f3" />
    </div>
  )
}
