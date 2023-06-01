import React, { useState } from 'react';

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
  },
  container_login: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
  },
  wrap_login: {
    width: '390px',
    borderRadius: '10px',
    overflow: 'hidden',
    padding: '77px 55px 33px 55px',
    boxShadow: '0 5px 10px 0px rgba(0, 0, 0, 0.2)',
  },
  login_form: {
    width: '100%',
    marginRight: '1em',
  },
  login_form_title: {
    fontFamily: 'Nunito, sans-serif',
    display: 'block',
    fontSize: '30px',
    color: 'azure',
    lineHeight: '1.2',
    textAlign: 'center',
  },
  wrap_input: {
    position: 'relative',
    borderBottom: '0.1em solid #adadad',
    marginBottom: '2em',
  },
  input: {
    fontSize: '15px',
    color: '#fff',
    lineHeight: '3em',
    border: 'none',
    display: 'block',
    width: '100%',
    height: '45px',
    backgroundColor: 'transparent',
    padding: '0 5px',
  },
  focus_input: {
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    pointerEvents: 'none',
    color: '#adadad',
    fontFamily: 'Nunito, sans-serif',
  },
  focus_input_before: {
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: '-2px',
    left: '0',
    width: '0',
    height: '2px',
    transition: 'all 0.4s',
    background: 'linear-gradient(to left, #21d4fd, #b721ff)',
  },
  focus_input_after: {
    fontFamily: 'Nunito, sans-serif',
    fontSize: '15px',
    color: '#999999',
    lineHeight: '1.2',
    content: 'attr(data-placeholder)',
    display: 'block',
    width: '100%',
    position: 'absolute',
    top: '16px',
    left: '0px',
    paddingLeft: '5px',
    transition: 'all 0.4s',
  },
  container_login_form_btn: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: '13px',
  },
  login_form_btn: {
    fontSize: '15px',
    border: 'none',
    borderRadius: '10px',
    color: '#fff',
    lineHeight: '1.2',
    textTransform: 'uppercase',
    display: 'flex',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50px',
    background: '#6a7dfe',
    background: '-webkit-linear-gradient(to left, #21d4fd, #b721ff)',
    background: '-o-linear-gradient(to left, #21d4fd, #b721ff)',
    background: '-moz-linear-gradient(to left, #21d4fd, #b721ff)',
    background: 'linear-gradient(to left, #21d4fd, #b721ff)',
  },
  login_form_btn_hover: {
    cursor: 'pointer',
  },
  text_center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2em',
  },
  txt1: {
    fontSize: '14px',
    color: '#adadad',
    lineHeight: '1.5',
    paddingRight: '5px',
  },
  txt2: {
    fontSize: '14px',
    color: '#6a7dfe',
    lineHeight: '1.5',
    textDecoration: 'none',
  },
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={styles.container}>
      <div style={styles.container_login}>
        <div style={styles.wrap_login}>
          <form style={styles.login_form}>
            {/* <span style={styles.login_form_title}>
              <img src={jpIMG} alt="Jovem Programador" style={styles.login_form_title_img} />
            </span> */}

            <div style={styles.wrap_input}>
              <input
                style={styles.input}
                className={`${email !== "" ? "has-val" : ""}`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span style={styles.focus_input} data-placeholder="Email">
                <span style={styles.focus_input_before}></span>
                <span style={styles.focus_input_after}></span>
              </span>
            </div>

            <div style={styles.wrap_input}>
              <input
                style={styles.input}
                className={`${password !== "" ? "has-val" : ""}`}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span style={styles.focus_input} data-placeholder="Password">
                <span style={styles.focus_input_before}></span>
                <span style={styles.focus_input_after}></span>
              </span>
            </div>

            <div style={styles.container_login_form_btn}>
              <button style={styles.login_form_btn}>Entrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;