import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = [
  { label: 'About Us',          href: '#about' },
  { label: 'Offerings',         href: '#offerings' },
  { label: 'Cluster Innovation',href: '#cluster' },
  { label: 'Inpulse',           href: '#inpulse' },
  { label: 'Contact',           href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>
        In<span>Unity</span>
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} className={styles.link} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.cta}>
        <a href="#contact" className={styles.btnOutline}>Schedule a Call</a>
        <a href="#contact" className={styles.btnPrimary}>
          Partner With CSR <span className={styles.arrow}>→</span>
        </a>
      </div>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
