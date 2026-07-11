import { useInView } from '../../hooks/useInView';
import styles from './Hero.module.css';

function Hero() {
  const [ref, isVisible] = useInView();

  return (
    <section
      id="hero"
      ref={ref}
      className={`${styles.hero} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Helping Growing Companies Scale with Control
        </h1>

        <p className={styles.subheadline}>
          Finance Transformation • Growth Enablement • Performance Transparency • Shared Services
        </p>

        <p className={styles.tagline}>
          Not Generic Consulting. Real Solutions for Growing Companies.
        </p>

        <a href="#contact" className={styles.cta}>
          Schedule an Introductory Call
        </a>
      </div>
    </section>
  );
}

export default Hero;