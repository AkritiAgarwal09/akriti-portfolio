import { buildSystems } from '../../data/buildSystems.js'
import SectionHeading from '../layout/SectionHeading.jsx'
import Reveal from '../ui/Reveal.jsx'
import TiltCard from '../ui/TiltCard.jsx'

export default function BuildSection() {
  return (
    <section id="build" className="siteSection buildSection">
      <SectionHeading eyebrow="WHAT I BUILD" title="Systems I like to build." />
      <div className="buildGrid">
        {buildSystems.map((item, index) => {
          const Icon = item.icon
          return (
            <Reveal key={item.title} delay={index * 0.05}>
              <TiltCard className="panel buildCard">
                <span className="buildIcon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="tagRow buildTags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
