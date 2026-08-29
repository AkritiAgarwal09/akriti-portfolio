import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer panel">
      <span>Based in New York, NY · Open to opportunities</span>
      <div>
        <a href="https://github.com/AkritiAgarwal09" target="_blank" rel="noreferrer">
          <Github size={16} />
        </a>
        <a href="https://linkedin.com/in/akag09" target="_blank" rel="noreferrer">
          <Linkedin size={16} />
        </a>
        <a href="mailto:aa5807@columbia.edu">
          <Mail size={16} />
        </a>
      </div>
      <small>© 2026 Akriti Agarwal</small>
    </footer>
  )
}
