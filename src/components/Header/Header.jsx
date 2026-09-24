import { useEffect, useRef, useState } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useLanguage } from '../../context/LanguageContext';
import logo from '../../assets/logo/The_palatine_advisory_group_white.svg';
import styles from './Header.module.css';

const NAV_LINKS = [
  { label: 'The Challenge', href: '#challenge' },
  { label: 'What We Do', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Founders', href: '#founders' },
  { label: 'Contact', href: '#footer-contact' },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace('#', ''));

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
    const { language, setLanguage } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const LANGUAGES = ['en', 'es', 'de'];

  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }

    function handleEscape(e) {
      if (e.key === 'Escape') {
        setLangOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <header className={styles.header}>
      <a href="#hero" className={styles.logo}>
        <img src={logo} alt="Palatine Advisory Group" className={styles.logoImg} />
      </a>
    <div className={styles.actions}>
      <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.href.replace('#', '');
          return (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

            <div className={styles.langSwitcher} ref={langRef}>
          <button
            className={styles.langButton}
            onClick={() => setLangOpen(!langOpen)}
            aria-label="Change language"
          >
            {language.toUpperCase()} ▾
          </button>
          {langOpen && (
            <div className={styles.langDropdown}>
              {LANGUAGES.map((lng) => (
                <button
                  key={lng}
                  className={styles.langOption}
                  onClick={() => {
                    setLanguage(lng);
                    setLangOpen(false);
                  }}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>

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