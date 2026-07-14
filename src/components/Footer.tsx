import { personal } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {personal.name}. Built for personal profile.
      </p>
    </footer>
  )
}
