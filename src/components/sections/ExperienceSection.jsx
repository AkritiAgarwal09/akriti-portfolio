import { BriefcaseBusiness, Building2, Layers3 } from 'lucide-react'
import { experiences } from '../../data/experiences.js'
import SectionHeading from '../layout/SectionHeading.jsx'
import AnimatedCounter from '../ui/AnimatedCounter.jsx'
import LogoBadge from '../ui/LogoBadge.jsx'
import Reveal from '../ui/Reveal.jsx'
import TiltCard from '../ui/TiltCard.jsx'

export default function ExperienceSection() {
  return (
    <section id="experience" className="siteSection">
      <SectionHeading eyebrow="EXPERIENCE" title="Building across research and production." />
      <div className="experienceLayout">
        <Reveal className="panel experiencePanel">
          <div className="experienceTimeline">
            {experiences.map((exp, index) => (
              <div className="expRow" key={`${exp.company}-${exp.role}`}>
                <div className="expRail">
                  <span className="railDot" />
                  {index !== experiences.length - 1 && <span className="railLine" />}
                </div>
                <LogoBadge text={exp.logo} brand={exp.brand} />
                <div className="expCompany">
                  <h3>{exp.company}</h3>
                  <small>{exp.role}</small>
                </div>
                <ul>
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="expMeta">
                  <time>{exp.date}</time>
                  <small>{exp.location}</small>
                </div>
              </div>
            ))}
          </div>
          <aside className="expStats">
            <TiltCard className="statBox">
              <span className="statIcon">
                <BriefcaseBusiness size={20} />
              </span>
              <div>
                <strong>
                  <AnimatedCounter value={3} suffix="+" />
                </strong>
                <small>Years of experience</small>
              </div>
            </TiltCard>
            <TiltCard className="statBox">
              <span className="statIcon">
                <Building2 size={20} />
              </span>
              <div>
                <strong>
                  <AnimatedCounter value={3} />
                </strong>
                <small>Industry organizations</small>
              </div>
            </TiltCard>
            <TiltCard className="statBox">
              <span className="statIcon">
                <Layers3 size={20} />
              </span>
              <div>
                <strong>
                  <AnimatedCounter value={10} suffix="+" />
                </strong>
                <small>Major projects</small>
              </div>
            </TiltCard>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
