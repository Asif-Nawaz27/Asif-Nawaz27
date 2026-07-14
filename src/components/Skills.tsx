import { skillGroups } from '../data/profile'
import SectionHeading from './SectionHeading'

function SkillGroupCard({ group }: { group: (typeof skillGroups)[number] }) {
  return (
    <div className="skill-card">
      <h3>{group.label}</h3>
      <div className="skill-card__tags">
        {group.items.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="section section-enter">
      <SectionHeading eyebrow="Skills" title="Technologies I work with" />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <SkillGroupCard key={group.label} group={group} />
        ))}
      </div>
    </section>
  )
}
