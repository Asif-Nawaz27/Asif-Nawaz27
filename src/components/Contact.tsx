import { personal } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section className="section section-enter">
      <SectionHeading eyebrow="Contact" title="Let's work together" />
      <div className="contact">
        <p>
          I'm always open to discussing new opportunities, interesting problems, or just talking
          shop about scalable systems and machine learning. Reach out any time.
        </p>
        <div className="contact__links">
          <a className="btn btn--primary" href={`mailto:${personal.email}`}>
            {personal.email}
          </a>
          <a className="btn btn--ghost" href={personal.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <a className="btn btn--ghost" href={personal.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
