import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.div_footer}>
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaGithub />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Ajudatec</span> &copy; 2023
      </p>
      <p>Todos os direitos reservados</p>
    </footer>
    </div>
  )
}

export default Footer