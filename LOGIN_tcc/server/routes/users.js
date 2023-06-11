import { Router } from "express";
import auth from "../middleware/auth.js";
import roleCheck from "../middleware/roleCheck.js";

const router = Router();


// essa rota aqui, ela pode ser clonada e feita para outras permissões, como user, admin, super_admin
router.get("/details", auth, roleCheck(["admin"]), (req, res) => {
	res.status(200).json({ message: "user authenticated." });
});

export default router;