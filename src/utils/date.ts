export const PRESENT = 'present' as const

export type MonthYear = string // 'YYYY-MM'
export type EndDate = MonthYear | typeof PRESENT

function parseMonthYear(value: MonthYear): Date {
  const [year, month] = value.split('-').map(Number)
  return new Date(year, month - 1, 1)
}

export function formatMonthYear(value: MonthYear): string {
  return parseMonthYear(value).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

export function formatDuration(start: MonthYear, end: EndDate): string {
  const startDate = parseMonthYear(start)
  const endDate = end === PRESENT ? new Date() : parseMonthYear(end)

  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1
  months = Math.max(months, 1)

  const years = Math.floor(months / 12)
  const remainingMonths = months % 12

  const parts: string[] = []
  if (years) parts.push(`${years} yr${years > 1 ? 's' : ''}`)
  if (remainingMonths) parts.push(`${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}`)

  return parts.join(' ') || '1 mo'
}

export function formatRange(start: MonthYear, end: EndDate): string {
  const endLabel = end === PRESENT ? 'Present' : formatMonthYear(end)
  return `${formatMonthYear(start)} - ${endLabel}`
}

export function formatRangeWithDuration(start: MonthYear, end: EndDate): string {
  return `${formatRange(start, end)} · ${formatDuration(start, end)}`
}

export function earliestStart(dates: MonthYear[]): MonthYear {
  return dates.reduce((earliest, current) => (current < earliest ? current : earliest))
}

export function latestEnd(dates: EndDate[]): EndDate {
  if (dates.includes(PRESENT)) return PRESENT
  return (dates as MonthYear[]).reduce((latest, current) => (current > latest ? current : latest))
}
