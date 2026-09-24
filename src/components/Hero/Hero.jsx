import { useInView } from '../../hooks/useInView';
import { useTranslation } from '../../hooks/useTranslation';
import styles from './Hero.module.css';

function Hero() {
  const [ref, isVisible] = useInView();
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      ref={ref}
      className={`${styles.hero} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.content}>
        <h1 className={styles.headline}>{t('hero.headline')}</h1>

        <p className={styles.supportingText}>{t('hero.supportingText')}</p>

        <p className={styles.subheadline}>{t('hero.subheadline')}</p>

        <p className={styles.tagline}>{t('hero.tagline')}</p>

        <a href="#contact" className={styles.cta}>
          {t('hero.cta')}
        </a>
      </div>
    </section>
  );
}

export default Hero;