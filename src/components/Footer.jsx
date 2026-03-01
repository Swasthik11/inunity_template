import styles from './Footer.module.css';

const navLinks = ['About Us', 'Offerings', 'Cluster Innovation', 'Inpulse', 'Contact'];
const hrefs    = ['#about', '#offerings', '#cluster', '#inpulse', '#contact'];
const programs = ['Cluster Innovation Model', 'Institutional Programs', 'Inpulse Platform', 'CSR Partnerships'];
const legal    = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'];
const socials  = [
  { label: 'in',  title: 'LinkedIn' },
  { label: 'ig',  title: 'Instagram' },
  { label: 'yt',  title: 'YouTube' },
  { label: '𝕏',  title: 'X / Twitter' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#hero" className={styles.logo}>In<span>Unity</span></a>
            <p className={styles.brandSub}>
              Empowering India's next billion through community-centric innovation.
              Building 100 regional clusters, one campus at a time.
            </p>
            <div className={styles.socials}>
              {socials.map(s => (
                <a key={s.label} href="#" className={styles.socialBtn} title={s.title} data-hover>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <h4>Navigation</h4>
            {navLinks.map((l, i) => (
              <a key={l} href={hrefs[i]} className={styles.fLink} data-hover>{l}</a>
            ))}
          </div>

          <div className={styles.col}>
            <h4>Programs</h4>
            {programs.map(p => (
              <a key={p} href="#" className={styles.fLink} data-hover>{p}</a>
            ))}
          </div>

          <div className={styles.col}>
            <h4>Legal</h4>
            {legal.map(l => (
              <a key={l} href="#" className={styles.fLink} data-hover>{l}</a>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 InUnity. All Rights Reserved. Mangalore, Karnataka.</p>
          <p>hello@inunity.in</p>
        </div>
      </div>
    </footer>
  );
}
