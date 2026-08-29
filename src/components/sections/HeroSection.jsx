import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { impact, portrait } from '../../data/index.js'
import HeroOrbital from '../effects/HeroOrbital.jsx'
import LogoBadge from '../ui/LogoBadge.jsx'
import MagneticButton from '../ui/MagneticButton.jsx'
import Reveal from '../ui/Reveal.jsx'
import TiltCard from '../ui/TiltCard.jsx'

export default function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="hero" className="siteSection heroSection">
      <div className="cinematicHero profileSection">
        <motion.div
          className="heroContent"
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="heroEyebrow"
            initial={reduceMotion ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12, duration: 0.55 }}
          >
            AI / ML ENGINEER • DATA SCIENTIST • SYSTEMS BUILDER
          </motion.p>

          <motion.h1
            className="heroTitleReference"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Building AI at the intersection of </span>
            <span className="heroTitleName heroTitleAccent">models, systems, and scale.</span>
          </motion.h1>

          <motion.p
            className="heroSubtitle"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42, duration: 0.6 }}
          >
            I work across agentic AI, machine learning, quantitative modeling, clinical NLP, and
            high-performance computing — building systems from experimentation and modeling through
            inference, evaluation, orchestration, and production.
          </motion.p>

          <motion.div
            className="heroActions heroActionsWide"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.55 }}
          >
            <MagneticButton className="primaryBtn heroCta" href="#projects">
              View my work <ArrowUpRight size={15} />
            </MagneticButton>
            <MagneticButton
              className="outlineBtn heroCtaSecondary"
              href="https://github.com/AkritiAgarwal09"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={15} /> GitHub
            </MagneticButton>
            <MagneticButton
              className="outlineBtn heroCtaSecondary"
              href="https://linkedin.com/in/akag09"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={15} /> LinkedIn
            </MagneticButton>
          </motion.div>

          <motion.p
            className="heroStatus"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.68, duration: 0.5 }}
          >
            <i /> Currently exploring full-time AI / ML / SWE opportunities.
          </motion.p>
        </motion.div>

        <motion.div
          className="heroVisual"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroOrbital portraitSrc={portrait.src} portraitAlt={portrait.alt} />
        </motion.div>
      </div>

      <Reveal>
        <TiltCard className="panel impactCard">
          <span className="kicker">
            <b /> IMPACT AT A GLANCE
          </span>
          <div className="impactList">
            {impact.map(([logo, brand, value, label]) => (
              <div className="impactBox" key={`${value}-${label}`}>
                <LogoBadge text={logo} brand={brand} />
                <div className="impactContent">
                  <strong className="impactValue">{value}</strong>
                  <small className="impactLabel">{label}</small>
                </div>
              </div>
            ))}
          </div>
        </TiltCard>
      </Reveal>

      <MagneticButton href="#about" className="scrollCue interactive">
        <span>Scroll to explore</span>
        <ArrowDown size={15} />
      </MagneticButton>
    </section>
  )
}
