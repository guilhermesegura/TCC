import UserToken from "../models/UserToken.js";
import jwt from "jsonwebtoken";

const verifyRefreshToken = (refreshToken) => {
	const privateKey = process.env.REFRESH_TOKEN_PRIVATE_KEY;

	return new Promise((resolve, reject) => {
		UserToken.findOne({ token: refreshToken }).then(()=>{jwt.verify(refreshToken, privateKey, (err, tokenDetails) => {
			if (err)
				return reject({ error: true, message: "Invalid refresh token" });
			resolve({
				tokenDetails,
				error: false,
				message: "Valid refresh token",
			});
		});},(err)=>{return reject({error: err, message:"An error occur"})});
			
		});
};

export default verifyRefreshToken;