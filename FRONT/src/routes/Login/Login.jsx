import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import blogFetch from "../../axios/config";
import { useNavigate } from "react-router-dom";



const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const [User, setUser] = useState({})
	const navigate = useNavigate()

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const getUser = async(email)=>{
		const response = await blogFetch.get(`/api/users?email=${email}`)
		const data = response.data.user
		setUser(data) 
	 }

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3000/api/logIn";
			const { data: res } = await axios.post(url, data);
			sessionStorage.setItem("access-token", res.accessToken);
			sessionStorage.setItem("refresh-token", res.refreshToken);
			sessionStorage.setItem("id", User._id)
			navigate( `/arearestrita/`);
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
