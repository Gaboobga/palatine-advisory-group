import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import styles from './Contact.module.css';

function Contact() {
  const [ref, isVisible] = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fase 2: conectar a servicio real de envío (EmailJS / Formspree)
    console.log('Form submitted (visual only):', formData);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div
        ref={ref}
        className={`${styles.content} ${isVisible ? styles.visible : ''}`}
      >
        <div className={styles.intro}>
          <h2 className={styles.headline}>
            Let's discuss how your organization can grow{' '}
            <span className={styles.highlight}>without losing control.</span>
          </h2>

          <a
            href="#"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YOUTUBE
          </a>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your current growth challenges..."
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              rows="1"
            />
          </div>

          <button type="submit" className={styles.submit}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;