import { useState } from 'react';
import useReveal from './useReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', org: '', type: 'Corporate / CSR', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: '', org: '', type: 'Corporate / CSR', message: '' });
  };

  return (
    <section className={styles.contact} id="contact" ref={ref}>
      <div className={styles.inner}>
        <div className={`${styles.text} reveal-left`}>
          <span className={styles.label}>Contact</span>
          <h2 className={styles.heading}>
            Let's Build Your Region's Innovation Story Together.
          </h2>
          <p className={styles.body}>
            Whether you're a corporate, institution, accelerator, or regional stakeholder —
            we'd love to start the conversation.
          </p>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard} data-hover>
              <p className={styles.icLabel}>Office</p>
              <p className={styles.icValue}>InUnity<br />Mangalore, Karnataka</p>
            </div>
            <div className={styles.infoCard} data-hover>
              <p className={styles.icLabel}>Email</p>
              <p className={styles.icValue}>hello@inunity.in</p>
            </div>
            <div className={`${styles.infoCard} ${styles.wideCard}`} data-hover>
              <p className={styles.icLabel}>Connect With Us</p>
              <div className={styles.socialRow}>
                {['LinkedIn', 'Instagram', 'YouTube', 'X / Twitter'].map(s => (
                  <span key={s} className={styles.socialTag} data-hover>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.formWrap} reveal-right`}>
          <h3 className={styles.formTitle}>Schedule a Discovery Call</h3>
          {sent ? (
            <div className={styles.successMsg}>
              <span className={styles.successIcon}>✓</span>
              Message sent! We'll be in touch shortly.
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Name</label>
                  <input name="name" value={form.name} onChange={onChange} placeholder="Your Name" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Organization</label>
                  <input name="org" value={form.org} onChange={onChange} placeholder="Organization" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Type</label>
                <select name="type" value={form.type} onChange={onChange}>
                  <option>Corporate / CSR</option>
                  <option>Institution</option>
                  <option>Accelerator</option>
                  <option>Government</option>
                  <option>Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea name="message" value={form.message} onChange={onChange} rows={4} placeholder="Tell us about your goals or region..." required />
              </div>
              <button type="submit" className={styles.submitBtn} data-hover>
                Send Message <span>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
