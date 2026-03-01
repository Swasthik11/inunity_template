import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const stats = [
  { n: '30K+', label: 'Students Impacted' },
  { n: '100',  label: 'Target Clusters' },
  { n: '50+',  label: 'Campuses Engaged' },
];

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Staggered word reveal on load
    const words = titleRef.current?.querySelectorAll('.' + styles.word);
    words?.forEach((w, i) => {
      setTimeout(() => w.classList.add(styles.wordVisible), 200 + i * 120);
    });
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Background layers */}
      <div className={styles.mesh} />
      <div className={styles.grid} />
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      {/* Orbit Visual */}
      <div className={`${styles.orbitalWrap} hide-mobile`}>
        <div className={styles.ring1} />
        <div className={styles.ring2} />
        <div className={styles.ringCore} />
        <div className={styles.glowCore} />
        <div className={styles.orbitDot1} />
        <div className={styles.orbitDot2} />
        {stats.map((s, i) => (
          <div key={i} className={`${styles.floatCard} ${styles['fc' + i]}`}>
            <div className={styles.fcNum}>{s.n}</div>
            <div className={styles.fcLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Empowering India's Next Billion
        </div>

        <h1 className={styles.title} ref={titleRef}>
          {'Empowering\nIndia\'s Innovation\nClusters'.split('\n').map((line, li) => (
            <div key={li} className={styles.titleLine}>
              {line.split(' ').map((word, wi) => (
                <span key={wi} className={styles.word}>
                  {word === 'Innovation' ? (
                    <em className={styles.accentWord}>{word}</em>
                  ) : word}{' '}
                </span>
              ))}
            </div>
          ))}
        </h1>

        <p className={styles.sub}>
          We partner with corporates, institutions, and communities to build
          100 regional innovation clusters — transforming students into problem
          solvers and industries into catalysts of measurable change.
        </p>

        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>
            <span>Partner Through CSR</span>
            <span className={styles.arrowIcon}>→</span>
          </a>
          <a href="#cluster" className={styles.btnOutline}>
            Explore Cluster Model
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>

      <div className={styles.fadeBottom} />
    </section>
  );
}
