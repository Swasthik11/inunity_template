import styles from './Marquee.module.css';

const partners = [
  'MANGALORE UNIVERSITY', 'MANIPAL ACADEMY', 'NITTE GROUP',
  'KOTAK CSR FOUNDATION', 'SIDBI FOUNDATION', 'KARNATAKA INNOVATION',
  'MSME INDIA', 'STARTUP KARNATAKA', 'NASSCOM FOUNDATION',
];

export default function Marquee() {
  const doubled = [...partners, ...partners];
  return (
    <div className={styles.bar}>
      <span className={styles.label}>Trusted Across India</span>
      <div className={styles.track}>
        {doubled.map((p, i) => (
          <span key={i} className={styles.item}>{p}</span>
        ))}
      </div>
    </div>
  );
}
