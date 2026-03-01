import { useEffect, useRef } from 'react';
import useReveal from './useReveal';
import styles from './Inpulse.module.css';

const features = [
  { icon: '🧠', title: 'Skill–Will Mapping',       desc: 'AI-powered profiling to understand student mindset, strengths, and growth trajectory across all dimensions.' },
  { icon: '📈', title: 'Assessment Intelligence',   desc: 'Track knowledge, aptitude, behavioral growth, and innovation competencies continuously over time.' },
  { icon: '🔗', title: 'Placement Engine',           desc: 'Matches student innovation profiles with industry roles and entrepreneurship pathways automatically.' },
  { icon: '📊', title: 'Analytics & Reporting',      desc: 'Transparent, measurable CSR and institutional impact tracking in real time for all stakeholders.' },
];

const metrics = [
  { n: '30K+', l: 'Students Tracked' },
  { n: '150+', l: 'Innovation Projects' },
  { n: '87%',  l: 'Skill Growth Rate' },
  { n: '50+',  l: 'Campuses Live' },
];

const bars = [
  { label: 'Student MVPs Built',        pct: 82 },
  { label: 'Community Impact Hours',    pct: 74 },
  { label: 'Startup Pipeline Progress', pct: 61 },
  { label: 'Placement Readiness',       pct: 79 },
];

function Dashboard() {
  const barsRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-pct]').forEach((bar, i) => {
          setTimeout(() => { bar.style.width = bar.dataset.pct + '%'; }, i * 180);
        });
        obs.unobserve(entry.target);
      }
    }, { threshold: 0.4 });
    if (barsRef.current) obs.observe(barsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashTop}>
        <div className={styles.trafficDots}>
          <span className={`${styles.td} ${styles.red}`} />
          <span className={`${styles.td} ${styles.yellow}`} />
          <span className={`${styles.td} ${styles.green}`} />
        </div>
        <span className={styles.dashTitle}>Inpulse — Institutional Dashboard</span>
      </div>
      <div className={styles.dashBody}>
        <p className={styles.dashSection}>Live Impact Metrics</p>
        <div className={styles.metricGrid}>
          {metrics.map((m, i) => (
            <div key={i} className={styles.metricCard} data-hover>
              <div className={styles.metricNum}>{m.n}</div>
              <div className={styles.metricLabel}>{m.l}</div>
            </div>
          ))}
        </div>
        <p className={`${styles.dashSection} ${styles.mt}`}>Innovation Outcomes</p>
        <div className={styles.progList} ref={barsRef}>
          {bars.map((b, i) => (
            <div key={i} className={styles.progItem}>
              <div className={styles.progMeta}>
                <span>{b.label}</span><span>{b.pct}%</span>
              </div>
              <div className={styles.progTrack}>
                <div className={styles.progFill} data-pct={b.pct} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Inpulse() {
  const ref = useReveal();
  return (
    <section className={styles.inpulse} id="inpulse" ref={ref}>
      <div className={styles.blob} />
      <div className={styles.inner}>
        <div className={`${styles.text} reveal-left`}>
          <span className={styles.label}>Inpulse Platform</span>
          <h2 className={styles.heading}>
            Innovation Intelligence, <em className={styles.em}>Data-Driven</em>
          </h2>
          <p className={styles.body}>
            Inpulse enables institutions and corporates to visualize skill development,
            innovation outcomes, and placement pathways through a unified analytics dashboard.
          </p>
          <ul className={styles.featureList}>
            {features.map((f, i) => (
              <li key={i} className={styles.featureItem} data-hover>
                <div className={styles.featureIcon}>{f.icon}</div>
                <div>
                  <h4 className={styles.featureTitle}>{f.title}</h4>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <a href="#contact" className={styles.demoBtn} data-hover>
            Book a Demo <span>→</span>
          </a>
        </div>
        <div className={`${styles.dashWrap} reveal-right`}>
          <Dashboard />
        </div>
      </div>
    </section>
  );
}
