import { personal } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section className="section section-enter">
      <SectionHeading eyebrow="About" title="A little about me" />
      <div className="about">
        <div className="about__text">
          {personal.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="about__top-skills">
          <h3>Top skills</h3>
          <ul>
            {personal.topSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
