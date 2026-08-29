import AuroraBackground from './components/effects/AuroraBackground.jsx'
import EnhancedCursor from './components/effects/EnhancedCursor.jsx'
import ParticleBackground from './components/effects/ParticleBackground.jsx'
import ScrollProgress from './components/effects/ScrollProgress.jsx'
import Spotlight from './components/effects/Spotlight.jsx'
import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import AboutSection from './components/sections/AboutSection.jsx'
import BuildSection from './components/sections/BuildSection.jsx'
import ContactSection from './components/sections/ContactSection.jsx'
import EducationSection from './components/sections/EducationSection.jsx'
import ExperienceSection from './components/sections/ExperienceSection.jsx'
import HeroSection from './components/sections/HeroSection.jsx'
import ProjectsSection from './components/sections/ProjectsSection.jsx'
import ResearchSection from './components/sections/ResearchSection.jsx'
import SkillsSection from './components/sections/SkillsSection.jsx'
import { useActiveSection } from './hooks/useActiveSection.js'
import { useTheme } from './hooks/useTheme.js'

export default function App() {
  const { theme, setTheme } = useTheme()
  const active = useActiveSection()

  return (
    <div className="appShell">
      <AuroraBackground theme={theme} />
      <ParticleBackground theme={theme} />
      <Spotlight />
      <div className="noise-overlay" aria-hidden="true" />
      <EnhancedCursor />
      <ScrollProgress />

      <Header theme={theme} setTheme={setTheme} active={active} />

      <main>
        <HeroSection />
        <AboutSection />
        <BuildSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ResearchSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
