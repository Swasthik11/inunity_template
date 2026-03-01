import { useRef } from 'react';
import useReveal from './useReveal';
import styles from './Offerings.module.css';

const cards = [
  {
    num: '01', icon: '🏗️', title: 'Cluster Innovation Model',
    desc: 'A regional framework that brings together students, institutions, MSMEs, and industries to solve community challenges through structured innovation cycles.',
    href: '#cluster',
  },
  {
    num: '02', icon: '🏛️', title: 'Institutional Programs',
    desc: 'Transforming institutions into innovation hubs through mindset development, design thinking, skill-building frameworks, and real-world problem-solving initiatives.',
    href: '#contact',
  },
  {
    num: '03', icon: '📊', title: 'Inpulse Platform',
    desc: 'The intelligence layer powering innovation ecosystems through AI-driven data, skill mapping, and measurable outcomes visible to all stakeholders in real time.',
    href: '#inpulse',
  },
];

function OfferCard({ card, index }) {
  const cardRef = useRef(null);

  const onMouseMove = e => {
    const r = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width * 100).toFixed(1);
    const y = ((e.clientY - r.top) / r.height * 100).toFixed(1);
    cardRef.current.style.setProperty('--mx', x + '%');
    cardRef.current.style.setProperty('--my', y + '%');
    // Tilt
    const tx = (e.clientX - r.left - r.width / 2) / r.width * 10;
    const ty = (e.clientY - r.top - r.height / 2) / r.height * 10;
    cardRef.current.style.transform = `perspective(900px) rotateY(${tx}deg) rotateX(${-ty}deg) translateY(-6px) scale(1.015)`;
  };

  const onMouseLeave = () => {
    cardRef.current.style.transform = '';
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.card} reveal delay-${index + 1}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-hover
    >
      <span className={styles.cardNum}>{card.num}</span>
      <div className={styles.cardGlow} />
      <div className={styles.cardIcon}>{card.icon}</div>
      <h3 className={styles.cardTitle}>{card.title}</h3>
      <p className={styles.cardDesc}>{card.desc}</p>
      <a href={card.href} className={styles.cardLink} data-hover>
        Learn More
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  );
}

export default function Offerings() {
  const ref = useReveal();

  return (
    <section className={styles.offerings} id="offerings" ref={ref}>
      <div className={styles.bgBlob} />

      <div className={`${styles.header} reveal`}>
        <span className={styles.label}>Our Offerings</span>
        <h2 className={styles.heading}>
          Innovation is not taught —{' '}
          <em className={styles.em}>it is built through ecosystems</em>
        </h2>
        <p className={styles.sub}>
          InUnity programs connect students, institutions, industries, and CSR partners
          to co-create sustainable innovation frameworks that generate real outcomes.
        </p>
      </div>

      <div className={styles.grid}>
        {cards.map((c, i) => <OfferCard key={i} card={c} index={i} />)}
      </div>
    </section>
  );
}
