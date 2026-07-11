import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import styles from './Services.module.css';

const SERVICES = [
  {
    title: 'Finance Organization & Control',
    description:
      'We build finance teams and structures that keep up with growth—clear reporting, smooth month-end closes, strong planning, and full control.',
    summary: 'We make finance fit for growth, control, and better decisions.',
  },
  {
    title: 'Growth, Processes & Systems',
    description:
      'We help companies scale without losing control. We align processes, governance, and systems so everything works as the business grows.',
    summary: 'We create the foundation for scalable growth.',
  },
  {
    title: 'Performance & Profit Transparency',
    description:
      'We turn data into insights. By defining the right KPIs and improving visibility, we help identify inefficiencies and reduce hidden costs.',
    summary: 'We make performance measurable, actionable, and transparent.',
  },
  {
    title: 'Shared Services & International Transitions',
    description:
      'We manage Shared Service Center setups and transfers—especially to India—from design to execution, including people and cultural challenges.',
    summary: 'We make complex transitions work—operationally and culturally.',
  },
  {
    title: 'Interim Leadership Solutions',
    description:
      'When additional leadership capacity is required, we provide access to a trusted network of experienced finance and transformation professionals.',
    summary: 'We connect organizations with proven finance and transformation leaders when critical expertise is needed.',
  },
];

function Services() {
  const [ref, isVisible] = useInView();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className={styles.services}>
       <div
        ref={ref}
        className={`${styles.content} ${isVisible ? styles.visible : ''}`}
      >
        <div className={styles.card}>
          <h2 className={styles.headline}>What We Do</h2>

          <div className={styles.list}>
          {SERVICES.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={service.title} className={styles.item}>
                <button
                  className={styles.itemHeader}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.itemTitle}>{service.title}</span>
                  <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>
                    ↓
                  </span>
                </button>

                <div
                  className={styles.itemBody}
                  style={{ maxHeight: isOpen ? '300px' : '0px' }}
                >
                  <p className={styles.description}>{service.description}</p>
                  <p className={styles.summary}>In short: {service.summary}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Services;