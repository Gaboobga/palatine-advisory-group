import { useState } from 'react';
import logo from '../../assets/logo/The_palatine_advisory_group.svg';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'The Challenge', href: '#challenge' },
  { label: 'What We Do', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Founders', href: '#founders' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Palatine Advisory Group" className={styles.logoImg} />
      </div>
    <div className={styles.actions}>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.navLink}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className={styles.cta}>
        Schedule a Call
      </a>

      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </div>
    </header>
  );
}

export default Header;