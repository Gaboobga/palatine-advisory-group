import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { useTranslation } from '../../hooks/useTranslation';
import styles from './Services.module.css';

function Services() {
  const [ref, isVisible] = useInView();
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();
  const services = t('services.items');

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
            <h2 className={styles.headline}>{t('services.headline')}</h2>

          <div className={styles.list}>
                    {services.map((service, index) => {
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
                  style={{ maxHeight: isOpen ? '150px' : '0px' }}
                >
                  <p className={styles.summary}>
                    {service.summary || 'Content coming soon.'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
                  <p className={styles.closingStatement}>{t('services.closingStatement')}</p>
      </div>
    </div>
    </section>
  );
}

export default Services;