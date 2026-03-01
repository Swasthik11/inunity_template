import useReveal from './useReveal';
import styles from './Cluster.module.css';

const layers = [
  { n: '1', title: 'Institutions as Regional Anchors', desc: 'Host innovation labs, structured student programs, and ecosystem collaborations as the backbone of regional development.' },
  { n: '2', title: 'Students as Changemakers', desc: 'Trained in design thinking, systems thinking, and MVP development to identify and solve local community challenges.' },
  { n: '3', title: 'Industries & CSR as Enablers', desc: 'Provide funding, mentorship, live challenges, and strategic guidance to accelerate student-led innovation at scale.' },
];

const tableRows = [
  ['Institutions',   'Establish brand as regional innovation hub'],
  ['CSR / Corporates','Create measurable, trackable regional impact'],
  ['Industries',     'Access innovation and emerging local talent'],
  ['Accelerators',   'Build pipeline of purpose-driven startups'],
];

export default function Cluster() {
  const ref = useReveal();

  return (
    <section className={styles.cluster} id="cluster" ref={ref}>
      <div className={styles.inner}>
        {/* Visual panel */}
        <div className={`${styles.panel} reveal-left`}>
          <div className={styles.panelGlow} />
          <p className={styles.panelLabel}>The 3-Layer Framework</p>
          {layers.map((l, i) => (
            <div key={i} className={styles.layerCard} data-hover>
              <div className={styles.layerNum}>{l.n}</div>
              <div>
                <h4 className={styles.layerTitle}>{l.title}</h4>
                <p className={styles.layerDesc}>{l.desc}</p>
              </div>
            </div>
          ))}
          <a href="#contact" className={styles.adoptBtn} data-hover>
            Adopt a Region <span>→</span>
          </a>
        </div>

        {/* Text + table */}
        <div className={`${styles.text} reveal-right`}>
          <span className={styles.label}>Cluster Innovation</span>
          <h2 className={styles.heading}>
            Building 100 Regional Innovation Clusters
          </h2>
          <p className={styles.body}>
            India's ground-up growth story. InUnity's Cluster Innovation Model is
            designed to unlock entrepreneurial potential at the regional level while
            enabling institutions and industries to drive scalable impact.
          </p>

          <div className={styles.table}>
            <div className={`${styles.tableRow} ${styles.tableHeader}`}>
              <span>Partner Type</span>
              <span>Key Benefits</span>
            </div>
            {tableRows.map(([type, benefit], i) => (
              <div key={i} className={styles.tableRow} data-hover>
                <span className={styles.rowType}>{type}</span>
                <span className={styles.rowBenefit}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
