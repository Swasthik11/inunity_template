import useReveal from './useReveal';
import styles from './CTABand.module.css';

export default function CTABand() {
  const ref = useReveal();
  return (
    <section className={styles.band} ref={ref}>
      <div className={styles.blob1} /><div className={styles.blob2} />
      <div className={`${styles.inner} reveal`}>
        <div className={styles.text}>
          <h2 className={styles.heading}>Join the Innovation-Led Campus Movement</h2>
          <p className={styles.sub}>Be part of Karnataka's first student-oriented social innovation movement — equipping youth to solve real-world challenges through structured innovation systems.</p>
        </div>
        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary} data-hover>
            Collaborate With Us <span>→</span>
          </a>
          <a href="#contact" className={styles.btnOutline} data-hover>Schedule a Call</a>
        </div>
      </div>
    </section>
  );
}
