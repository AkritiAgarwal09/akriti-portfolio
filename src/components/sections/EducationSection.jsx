import { MapPin } from 'lucide-react'
import { education } from '../../data/education.js'
import SectionHeading from '../layout/SectionHeading.jsx'
import LogoBadge from '../ui/LogoBadge.jsx'
import Reveal from '../ui/Reveal.jsx'
import TiltCard from '../ui/TiltCard.jsx'

export default function EducationSection() {
  return (
    <section id="education" className="siteSection educationSection">
      <SectionHeading eyebrow="EDUCATION" title="The foundation behind the work." />
      <div className="educationGrid">
        {education.map((item, index) => (
          <Reveal key={item.school} className="educationReveal" delay={index * 0.05}>
            <TiltCard className="panel educationCard">
              <div className="educationHeader">
                <LogoBadge text={item.logo} brand={item.brand} />
                <div className="educationHeaderText">
                  <span className="tag">EDUCATION</span>
                  <h3>{item.school}</h3>
                  <p className="educationDegree">{item.degree}</p>
                </div>
              </div>
              <small className="educationDetails">{item.details}</small>
              <div className="educationMeta">
                <time>{item.date}</time>
                <span>
                  <MapPin size={13} />
                  {item.location}
                </span>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
