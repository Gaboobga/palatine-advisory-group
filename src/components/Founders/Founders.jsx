import { useInView } from '../../hooks/useInView';
import fotoAndre from '../../assets/images/founders/founder-andre.jpg';
import fotoAdriana from '../../assets/images/founders/founder-adriana.jpg';
import fotoNiclas from '../../assets/images/founders/founder-niclas.jpg';
import styles from './Founders.module.css';

const FOUNDERS = [
  {
    name: 'Andre Bott',
    role: 'Co-Founder, Finance Transformation Expert',
    bio: 'Extensive international leadership experience driving finance transformation and organizational development for growing companies.',
    photo: fotoAndre,
    linkedin: '#',
  },
  {
    name: 'Adriana Garcia',
    role: 'Co-Founder, Growth & Scaling Advisor',
    bio: 'Proven track record helping companies scale operations and expand internationally while maintaining financial control.',
    photo: fotoAdriana,
    linkedin: '#',
  },
  {
    name: 'Niclas Woll',
    role: 'Co-Founder, Shared Services & International Transitions',
    bio: 'Deep expertise in Shared Service Center transitions, managing complex operational and cultural challenges across global teams.',
    photo: fotoNiclas,
    linkedin: '#',
  },
];

function Founders() {
  const [ref, isVisible] = useInView();

  return (
    <section id="founders" className={styles.founders}>
      <div
        ref={ref}
        className={`${styles.content} ${isVisible ? styles.visible : ''}`}
      >
        <div className={styles.headerRow}>
          <h2 className={styles.headline}>Meet the Founders</h2>
          <div className={styles.stat}>
            <span className={styles.statNumber}>60+ Years</span>
            <span className={styles.statLabel}>Combined Experience</span>
          </div>
        </div>

        <div className={styles.grid}>
          {FOUNDERS.map((founder) => (
            <div key={founder.name} className={styles.card}>
              <img
                src={founder.photo}
                alt={founder.name}
                className={styles.photo}
              />
              <p className={styles.role}>{founder.role}</p>
              <h3 className={styles.name}>{founder.name}</h3>
              <p className={styles.bio}>{founder.bio}</p>
              <a href={founder.linkedin} className={styles.linkedin} target="_blank" rel="noopener noreferrer">
                <svg className={styles.linkedinIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Founders;