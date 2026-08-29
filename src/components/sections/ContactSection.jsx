import { Github, Linkedin, Mail } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton.jsx'
import Reveal from '../ui/Reveal.jsx'
import TiltCard from '../ui/TiltCard.jsx'

export default function ContactSection() {
  return (
    <section id="contact" className="siteSection contactSection">
      <Reveal>
        <TiltCard className="panel contactPanel">
          <div className="contactGlow" />
          <span className="kicker purple">
            <b /> CONTACT
          </span>
          <h2>Have an interesting problem?</h2>
          <p>
            I&apos;m interested in AI/ML, data science, software, and research roles where technical
            depth translates into measurable real-world impact.
          </p>
          <div className="contactActions">
            <MagneticButton className="primaryBtn" href="mailto:aa5807@columbia.edu">
              <Mail size={16} /> Email Me
            </MagneticButton>
            <MagneticButton
              className="socialButton"
              href="https://linkedin.com/in/akag09"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} /> LinkedIn
            </MagneticButton>
            <MagneticButton
              className="socialButton"
              href="https://github.com/AkritiAgarwal09"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} /> GitHub
            </MagneticButton>
          </div>
        </TiltCard>
      </Reveal>
    </section>
  )
}
