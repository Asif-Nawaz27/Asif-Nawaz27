interface Props {
  eyebrow: string
  title: string
}

export default function SectionHeading({ eyebrow, title }: Props) {
  return (
    <div className="section-heading">
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <h2 className="section-heading__title">{title}</h2>
    </div>
  )
}
