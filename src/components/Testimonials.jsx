import useReveal from './useReveal';
import styles from './Testimonials.module.css';

const testimonials = [
  { name: 'CSR Partner', role: 'Corporate Foundation', quote: '"InUnity bridges intent and impact — from classrooms to communities. The Inpulse dashboard gives us complete visibility into where our CSR investment is creating real, lasting change."' },
  { name: 'Institution Head', role: 'Engineering College, Karnataka', quote: '"Our campus transformed into a genuine innovation hub. Students who joined InUnity\'s cluster programs are now leading their own ventures — solving problems we couldn\'t even articulate before."' },
  { name: 'Student Innovator', role: 'Cluster Innovation Participant', quote: '"I never thought I could build something that actually helped my community. The structured mentorship through InUnity turned my idea into a working prototype in just 8 weeks."' },
];

export default function Testimonials() {
  const ref = useReveal();
  return (
    <section className={styles.section} id="testimonials" ref={ref}>
      <div className={styles.bgBlob} />
      <div className={styles.inner}>
        <div className={`${styles.header} reveal`}>
          <span className={styles.label}>Testimonials</span>
          <h2 className={styles.heading}>Shared by Those Who Experienced the Difference</h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={`${styles.card} reveal delay-${i + 1}`} data-hover>
              <div className={styles.cardTop}>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
                <div className={styles.quoteMark}>"</div>
              </div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.cardGlow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
