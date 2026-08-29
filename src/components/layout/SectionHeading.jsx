import Reveal from '../ui/Reveal.jsx'

export default function SectionHeading({ eyebrow, title, copy }) {
  return (
    <Reveal className="sectionHeading">
      <small>{eyebrow}</small>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </Reveal>
  )
}
