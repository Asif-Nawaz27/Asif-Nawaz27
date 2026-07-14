export type SectionId = 'home' | 'about' | 'experience' | 'skills' | 'education' | 'contact'

export interface NavItem {
  id: SectionId
  label: string
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
