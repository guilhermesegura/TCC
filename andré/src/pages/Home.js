import styles from "./Home.module.css";

import LinkButton from "../components/layout/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Cursos para aprender de verdade!</h1>
      <LinkButton to="/cursos" text="Cursos disponíveis" />
    </section>
  );
}

export default Home;
