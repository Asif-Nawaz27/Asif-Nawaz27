import { certifications, education } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section className="section section-enter">
      <SectionHeading eyebrow="Education" title="Academic background & certifications" />
      <div className="education">
        <div className="education__list">
          {education.map((entry) => (
            <div key={entry.school} className="education__item">
              <h3>{entry.school}</h3>
              <p>{entry.degree}</p>
              <span>{entry.period}</span>
            </div>
          ))}
        </div>

        <div className="education__certs">
          <h3>Certifications & Recognition</h3>
          <ul>
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
