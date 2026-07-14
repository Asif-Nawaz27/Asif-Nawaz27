import { personal } from '../data/profile'
import type { SectionId } from '../types'

interface Props {
  onNavigate: (section: SectionId) => void
}

export default function Hero({ onNavigate }: Props) {
  return (
    <section className="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow">Hi, I'm</p>
        <h1 className="hero__name">{personal.name}</h1>
        <p className="hero__headline">{personal.headline}</p>
        <p className="hero__location">📍 {personal.location}</p>

        <div className="hero__actions">
          <button className="btn btn--primary" onClick={() => onNavigate('contact')}>
            Get in touch
          </button>
          <button className="btn btn--ghost" onClick={() => onNavigate('experience')}>
            View experience
          </button>
        </div>

        <div className="hero__links">
          <a href={`mailto:${personal.email}`} aria-label="Email">
            Email
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
