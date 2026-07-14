import { experience } from '../data/profile'
import { earliestStart, formatRange, formatRangeWithDuration, latestEnd } from '../utils/date'
import SectionHeading from './SectionHeading'

function CompanyCard({ entry }: { entry: (typeof experience)[number] }) {
  const companyStart = earliestStart(entry.roles.map((role) => role.startDate))
  const companyEnd = latestEnd(entry.roles.map((role) => role.endDate))

  return (
    <div className="timeline__item">
      <div className="timeline__marker" />
      <div className="timeline__content">
        <div className="timeline__header">
          <h3>{entry.company}</h3>
          <span className="timeline__period">{formatRangeWithDuration(companyStart, companyEnd)}</span>
        </div>
        {entry.location && <p className="timeline__location">{entry.location}</p>}
        {entry.summary && <p className="timeline__summary">{entry.summary}</p>}

        <div className="timeline__roles">
          {entry.roles.map((role) => (
            <div key={role.role + role.startDate} className="timeline__role">
              <div className="timeline__role-header">
                <h4>{role.role}</h4>
                <span>{formatRange(role.startDate, role.endDate)}</span>
              </div>
              <ul>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="section section-enter">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />
      <div className="timeline">
        {experience.map((entry) => (
          <CompanyCard key={entry.company} entry={entry} />
        ))}
      </div>
    </section>
  )
}
