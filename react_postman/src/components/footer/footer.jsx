import logo from "../../../public/logo.png";
import styles from "./footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.some}>
        <FaFacebookSquare />
        <RiInstagramFill />
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="" />
        <p>Gittes Glamping</p>
      </div>
    </footer>
  );
};
export default Footer;
