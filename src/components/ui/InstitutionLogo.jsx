export default function InstitutionLogo({ src, secondary, alt, logoClass = '' }) {
  return (
    <div className={`institutionLogo ${logoClass}`}>
      <img className="institutionLogoMain" src={src} alt={alt} loading="lazy" />
      {secondary && (
        <img
          className="institutionLogoSecondary"
          src={secondary}
          alt="Columbia Data Science Institute"
          loading="lazy"
        />
      )}
    </div>
  )
}
