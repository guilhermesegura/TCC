// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import "./Login.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Lógica de autenticação
//     // Aqui você pode fazer a validação do email e senha
//     // ou enviar os dados para o servidor

//     console.log("Email:", email);
//     console.log("Password:", password);

//     // Limpar os campos após o submit
//     setEmail("");
//     setPassword("");
//   };

//   return (
//     <div className="login-container">
//       <h1 className="titulo">Página de login</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="email" className="label">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//             className="input"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password" className="label">
//             Senha:
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             className="input"
//           />
//         </div>
//         <Link to="/login" className="button1">
//           Entrar
//         </Link>
//         <Link to="/cadastro" className="button1">
//           Registrar
//         </Link>
//       </form>
//     </div>
//   );
// }

// export default Login;

import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import blogFetch from "../../axios/config";



const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const [User, setUser] = useState({})

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const getUser = async(email)=>{
		const response = await blogFetch.get(`/api/users/email?email=${email}`)
		const data = response.data.user
		setUser(data) 
	 }

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/api/logIn";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
		
			window.location = `/arearestrita/${User._id}`;
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	useEffect(()=>{
		getUser(data.email)
	},[data.email])
	

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={(e)=>{handleSubmit(e)}}>
						<h1 className={styles.titulo}>Login</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
							
						/>
						<input
							type="password"
							placeholder="Senha"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Entrar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
