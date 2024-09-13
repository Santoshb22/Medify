import styles from './FooterLink.module.css'; // Ensure your CSS module path is correct

const FooterLink = ({ text }) => {
  return (
    <li className={styles.footerLink}>
      <span>➤</span> {text}
    </li>
  );
};

export default FooterLink;