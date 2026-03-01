import useReveal from './useReveal';
import styles from './Impact.module.css';

const rows = [
  { n: '30,000+', title: 'Students Impacted', desc: 'Across 20+ regions, students are trained in design thinking, systems thinking, and building MVPs that address real local community challenges.' },
  { n: '50+',     title: 'Campuses Engaged',  desc: 'Institutions onboarded as regional anchors of innovation, establishing labs and structured programs for entrepreneurial learning environments.' },
  { n: '120+',    title: 'Community Challenges Solved', desc: 'Student-led MVPs and innovation projects directly addressing pressing problems in healthcare, agriculture, education, and sustainability.' },
  { n: '15',      title: 'Regional Collaborations', desc: 'Strategic alliances between CSR leaders, institutions, accelerators, MSMEs, and regional stakeholders committed to measurable innovation impact.' },
];

export default function Impact() {
  const ref = useReveal();
  return (
    <section className={styles.impact} id="impact" ref={ref}>
      <div className={styles.bgGrad} />
      <div className={`${styles.header} reveal`}>
        <span className={styles.label}>Our Impact So Far</span>
        <h2 className={styles.heading}>
          Innovation With <em className={styles.em}>Measurable Impact</em>
        </h2>
        <p className={styles.sub}>Every number represents real students, real communities, and real change across India's regions.</p>
      </div>

      <div className={styles.list}>
        {rows.map((r, i) => (
          <div key={i} className={`${styles.row} reveal delay-${i + 1}`} data-hover>
            <div className={styles.numCol}>
              <span className={styles.num}>{r.n}</span>
            </div>
            <div className={styles.textCol}>
              <h4 className={styles.rowTitle}>{r.title}</h4>
              <p className={styles.rowDesc}>{r.desc}</p>
            </div>
            <div className={styles.rowLine} />
          </div>
        ))}
      </div>
    </section>
  );
}
