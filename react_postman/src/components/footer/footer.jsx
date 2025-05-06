import logo from "../../../public/logo.png";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="" />
    </footer>
  );
};
export default Footer;
