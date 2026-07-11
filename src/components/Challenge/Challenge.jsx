import { useScrollOverlay } from '../../hooks/useScrollOverlay';
import styles from './Challenge.module.css';

const CHALLENGES = [
  'Lack of financial transparency',
  'Increasing complexity',
  'Weak governance',
  'Inefficient processes',
  'Limited management visibility',
  'Difficult international transitions',
];

function Challenge() {
  const [sectionRef, progress] = useScrollOverlay(0.6);

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
        <h2 className={styles.headline}>
          Growth Creates Opportunity. Growth Creates Complexity.
        </h2>

        <p className={styles.intro}>
          Rapid growth often creates challenges such as:
        </p>

        <ul className={styles.list}>
          {CHALLENGES.map((item) => (
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