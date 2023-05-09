import { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.container_login}>
        <div className={styles.wrap_login}>
          <form className={styles.login_form}>
            {/* <span className={styles.login_form_title}>
              <img src={jpIMG} alt="Jovem Programador" />
            </span> */}

            <div className={styles.wrap_input}>
              <input
                className={`${email !== "" ? styles["has-val"] : ""} ${styles.input}`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className={styles.focus_input} data-placeholder="Email"></span>
            </div>

            <div className={styles.wrap_input}>
              <input
                className={`${password !== "" ? styles["has-val"] : ""} ${styles.input}`}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className={styles.focus_input} data-placeholder="Password"></span>
            </div>

            <div className={styles.container_login_form_btn}>
              <button className={styles.login_form_btn}>Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
