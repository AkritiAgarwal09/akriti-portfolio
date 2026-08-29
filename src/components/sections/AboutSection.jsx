import { Compass, GraduationCap, MapPin } from 'lucide-react'
import { aboutFocus } from '../../data/aboutFocus.js'
import Reveal from '../ui/Reveal.jsx'
import TiltCard from '../ui/TiltCard.jsx'

export default function AboutSection() {
  return (
    <section id="about" className="siteSection aboutSection">
      <Reveal>
        <TiltCard className="panel aboutPanelFull">
          <span className="heroKicker">
            <b /> ABOUT ME
          </span>

          <h2 className="aboutLead">
            I work at the intersection of modeling, systems, and scale.
          </h2>

          <div className="aboutBody">
            <div className="aboutProse aboutProseSingle">
              <p>
                My work sits at the intersection of machine learning and systems engineering.
                I&apos;m interested not only in whether a model performs well, but in what happens
                when it has to operate under real-world constraints like latency, reliability,
                scale, noisy data, and production failure modes.
              </p>
              <p>
                I&apos;m currently pursuing an M.S. in Data Science at Columbia University, where
                my work spans machine learning, deep learning, NLP, statistical modeling, and AI
                systems.
              </p>
              <p>
                Across T-Mobile, JPMorgan Chase, Intel, and Columbia, I&apos;ve worked on
                intelligent automation, financial modeling, clinical NLP, production ML pipelines,
                and systems designed to make complex workflows faster and more autonomous.
              </p>
              <p>
                What I enjoy most is taking an ambiguous problem, understanding it deeply, and
                building the system around it from data and modeling to evaluation, infrastructure,
                and deployment.
              </p>
            </div>

            <aside className="aboutSidebar">
              <div className="aboutFocusChips aboutFocusChipsSidebar">
                {aboutFocus.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>

              <div className="aboutInfo aboutInfoStack">
                <div>
                  <MapPin size={18} />
                  <span>
                    <b>Location</b>
                    <small>New York, NY</small>
                    <small className="aboutInfoNote">Open to relocate</small>
                  </span>
                </div>
                <div>
                  <GraduationCap size={18} />
                  <span>
                    <b>Education</b>
                    <small>M.S. Data Science</small>
                    <small className="aboutInfoNote">Columbia University</small>
                  </span>
                </div>
                <div>
                  <Compass size={18} />
                  <span>
                    <b>Building</b>
                    <small>AI/ML · Agents · Quant Finance</small>
                    <small className="aboutInfoNote">Systems · Research</small>
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </TiltCard>
      </Reveal>
    </section>
  )
}
