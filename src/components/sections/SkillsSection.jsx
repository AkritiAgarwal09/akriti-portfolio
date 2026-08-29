import { skillGroups } from '../../data/skills.js'
import SectionHeading from '../layout/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import TiltCard from '../ui/TiltCard.jsx'

export default function SkillsSection() {
  return (
    <section id="skills" className="siteSection skillsSection">
      <SectionHeading eyebrow="TECH STACK" title="Technologies are tools. Systems are the goal." />
      <div className="skillsGrid">
        {skillGroups.map(([name, Icon, items], index) => (
          <Reveal key={name} delay={index * 0.035}>
            <TiltCard className="panel skillCard">
              <h3>
                <Icon size={18} />
                {name}
              </h3>
              <div className="skillsTags">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
