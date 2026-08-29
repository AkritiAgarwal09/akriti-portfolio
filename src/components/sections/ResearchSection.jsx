import { research } from '../../data/research.js'
import SectionHeading from '../layout/SectionHeading.jsx'
import InstitutionLogo from '../ui/InstitutionLogo.jsx'
import Reveal from '../ui/Reveal.jsx'
import TiltCard from '../ui/TiltCard.jsx'

export default function ResearchSection() {
  return (
    <section id="research" className="siteSection researchSection">
      <SectionHeading eyebrow="RESEARCH" title="Exploring where intelligent systems break." />
      <div className="researchGrid">
        {research.map((item, index) => (
          <Reveal key={item.title} className="researchReveal" delay={index * 0.06}>
            <TiltCard className="panel researchCard">
              <div className="researchHeader">
                <InstitutionLogo
                  src={item.logo}
                  secondary={item.logoSecondary}
                  alt={item.institution}
                  logoClass={item.logoClass}
                />
                <div className="researchHeaderText">
                  <span className="tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <small>{item.institutionShort}</small>
                </div>
              </div>

              <div className="researchBody">
                <p className="researchDesc">{item.desc}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="tagRow researchStack">
                  {item.stack.map((stack) => (
                    <span key={stack}>{stack}</span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
