
import jwt from "jsonwebtoken";
import UserToken from "../models/UserToken.js";
// import dotenv from "dotenv"
// dotenv.config()

const generateTokens = async (user) => {
	try {
		const payload = { _id: user._id, roles: user.roles };
		const accessToken = jwt.sign(
			payload,
			process.env.ACCESS_TOKEN_PRIVATE_KEY,
			{ expiresIn: "14m" }
		);
		const refreshToken = jwt.sign(
			payload,
			process.env.REFRESH_TOKEN_PRIVATE_KEY,
			{ expiresIn: "30d" }
		);

		const userToken = await UserToken.findOne({ userId: user._id });
		if (userToken) await UserToken.findByIdAndRemove(userToken._id);

		await new UserToken({ userId: user._id, token: refreshToken }).save();
		return Promise.resolve({ accessToken, refreshToken });
	} catch (err) {
		return Promise.reject(err);
	}
};

export default generateTokens;