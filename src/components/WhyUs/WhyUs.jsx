import { useInView } from '../../hooks/useInView';
import styles from './WhyUs.module.css';

const DIFFERENTIATORS = [
  'Senior Experts Only',
  'Hands-On Execution',
  'Built for Growing Companies',
  'International Experience',
  'Proven Shared Service Expertise',
  'Finance-Led Transformation',
];

function WhyUs() {
  const [ref, isVisible] = useInView();

  return (
    <section id="why-us" className={styles.whyUs}>
      <div
        ref={ref}
        className={`${styles.content} ${isVisible ? styles.visible : ''}`}
      >
        <h2 className={styles.headline}>Why Clients Work With Us</h2>

        <div className={styles.grid}>
          {DIFFERENTIATORS.map((item, index) => (
            <div key={item} className={styles.card}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className={styles.title}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;