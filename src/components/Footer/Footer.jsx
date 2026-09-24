import logo from '../../assets/logo/The_palatine_advisory_group.svg';
import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer-contact" className={styles.footer}>
      <div className={styles.top}>
        <p className={styles.tagline}>
          Not Generic Consulting.<br />Real Solutions.
        </p>
      </div>

      <div className={styles.columns}>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Contact</h4>
          <p className={styles.text}>The Palatine Advisory Group</p>
          <p className={styles.text}>[Address pending]</p>
          <p className={styles.text}>[Phone pending]</p>
          <p className={styles.text}>info@palatineadvisory.com</p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Navigate</h4>
          <a href="#challenge" className={styles.link}>The Challenge</a>
          <a href="#services" className={styles.link}>What We Do</a>
          <a href="#why-us" className={styles.link}>Why Us</a>
          <a href="#founders" className={styles.link}>Founders</a>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Connect</h4>
          <a href="#" className={styles.link}>LinkedIn</a>
          <a href="#" className={styles.link}>YouTube</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <img src={logo} alt="Palatine Advisory Group" className={styles.logoImg} />
        <p className={styles.copyright}>© {year} The Palatine Advisory Group. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;