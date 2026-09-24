import { useScrollOverlay } from '../../hooks/useScrollOverlay';
import { useTranslation } from '../../hooks/useTranslation';
import styles from './Challenge.module.css';

function Challenge() {
  const [sectionRef, progress] = useScrollOverlay(0.6);
  const { t } = useTranslation();

  const overlayOpacity = 1 - progress;
  const contentOpacity = progress;

  return (
    <section id="challenge" ref={sectionRef} className={styles.challenge}>
      <div className={styles.overlay} style={{ opacity: overlayOpacity }} />

      <div
        className={styles.content}
        style={{
          opacity: contentOpacity,
          transform: `translateY(${(1 - contentOpacity) * 15}px)`,
        }}
      >
             <h2 className={styles.headline}>{t('challenge.headline')}</h2>

        <p className={styles.supportingText}>{t('challenge.supportingText')}</p>

        <p className={styles.intro}>{t('challenge.intro')}</p>

        <ul className={styles.list}>
          {t('challenge.list').map((item) => (
            <li key={item} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Challenge;