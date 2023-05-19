import styles from "./Cursos.module.css";

function Cursos() {
  return (
    <div className={styles.ag_format_container}>
      <div className={styles.ag_courses_box}>
        <div className={styles.ag_curses_item}>
          <a href="#" class={styles.ag_courses_item_link}>
            <div className={styles.ag_courses_item_bg}></div>
            <div className={styles.ag_courses_item_title}>
              Teste para algum curso
            </div>
            <div className={styles.ag_courses_item_date_box}>
              Disponível: 
              <span className={styles.ag_courses_item_date}>02.03.2023</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cursos;
