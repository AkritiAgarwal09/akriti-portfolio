import { brandLogos } from '../../data/brandLogos.js'

export default function LogoBadge({ text, brand = '' }) {
  const imageLogo = brandLogos[brand]

  if (imageLogo) {
    return (
      <span className={`logoBadge ${brand} logoBadgeImage`}>
        <img src={imageLogo.src} alt={imageLogo.alt} loading="lazy" />
      </span>
    )
  }

  return <span className={`logoBadge ${brand}`}>{text}</span>
}
