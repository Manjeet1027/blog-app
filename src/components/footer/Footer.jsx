import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>devify</div>
      <div className={styles.text}>
        Devify creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;