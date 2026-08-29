import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/projects.js'
import SectionHeading from '../layout/SectionHeading.jsx'
import ProjectIcon from '../ui/ProjectIcon.jsx'
import Reveal from '../ui/Reveal.jsx'
import TiltCard from '../ui/TiltCard.jsx'

export default function ProjectsSection() {
  return (
    <section id="projects" className="siteSection">
      <SectionHeading eyebrow="SELECTED WORK" title="Things I've built, researched, and shipped." />
      <div className="projectsGrid">
        {projects.map((project, index) => (
          <Reveal key={project.title} className="projectReveal" delay={index * 0.04}>
            <TiltCard className="panel projectCard">
              <div className="projectHeader">
                <ProjectIcon icon={project.icon} />
                <div className="projectHeaderText">
                  <span className="tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  {project.subtitle && <p className="projectSubtitle">{project.subtitle}</p>}
                </div>
              </div>
              <div className="projectBody">
                <p className="projectDesc">{project.desc}</p>
                <div className="projectFooter">
                  <span className="techLabel">TECH STACK</span>
                  <div className="tagRow">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  {project.links?.length > 0 && (
                    <div className="projectLinks">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          className={link.primary ? 'cardLink cardLinkPrimary' : 'cardLink'}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label} <ArrowUpRight size={14} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
