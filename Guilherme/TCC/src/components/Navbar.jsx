import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import Container from "./Container";
import logo from "../assets/logo.png"

const  Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/cursos">Cursos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li className={styles.item}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar