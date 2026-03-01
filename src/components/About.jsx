import useReveal from './useReveal';
import styles from './About.module.css';

const stats = [
  { n: '30K+', label: 'Students Engaged' },
  { n: '50+',  label: 'Campuses Onboarded' },
  { n: '120+', label: 'Community Challenges Solved' },
  { n: '15+',  label: 'Regional Collaborations' },
  { n: '20+',  label: 'Regions Activated' },
  { n: '150+', label: 'Innovation Projects' },
];

export default function About() {
  const ref = useReveal();

  return (
    <section className={styles.about} id="about" ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.text} reveal-left`}>
          <span className={styles.label}>Our Story</span>
          <h2 className={styles.heading}>
            Born from the belief that{' '}
            <em className={styles.em}>education must extend beyond classrooms.</em>
          </h2>
          <p className={styles.body}>
            InUnity began as a movement to enable students to solve real-world problems.
            Today, we are building 100 regional innovation clusters across India — creating
            structured pathways for institutions and industries to collaborate in developing
            purpose-driven youth leaders.
          </p>
          <p className={`${styles.body} ${styles.bodyMt}`}>
            Our mission is to unlock entrepreneurial intent in every student and create
            measurable community impact through innovation ecosystems that redefine how
            India develops — region by region, campus by campus.
          </p>
          <a href="#contact" className={styles.cta}>
            <span>Collaborate With Us</span>
            <span className={styles.ctaArrow}>→</span>
          </a>
        </div>

        <div className={`${styles.statsGrid} reveal-right`}>
          {stats.map((s, i) => (
            <div key={i} className={styles.statCell} data-hover>
              <div className={styles.statNum}>
                {s.n.replace(/[0-9K+]/g, '')}
                <span className={styles.statNums}>{s.n}</span>
              </div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
