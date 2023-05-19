import styles from "./Home.module.css";
import imagem from "../img/undraw.svg";

import LinkButton from "../components/layout/LinkButton";

function Home() {
  return (
      <section className={styles.home_container}>
        <h1>
          Cursos para <br></br> aprender de <br></br> verdade!
        </h1>
        {/* <LinkButton to="/cursos" text="Cursos disponíveis" /> */}
        <img src={imagem} alt="imagem" />
      </section>  
  );
}

export default Home;
