import React from "react";
import { FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.div_footer}>
      <footer className={styles.footer}>
        <ul className={styles.social_list}>
          <li>
            <a href="https://github.com/anguecalmon/TCC">
              <FaGithub />
            </a>
          </li>
        </ul>
        <p className={styles.copy_right}>
          <span>Ajudatec</span> &copy; 2023
        </p>
      </footer>
    </div>
  );
}

export default Footer;
