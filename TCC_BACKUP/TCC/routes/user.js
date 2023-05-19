const express = require("express");
const router = express.Router();

const {
    deleteuser,
    updateuser,
    getuser,
    loginuser,
    registeruser
} = require("../controller/user")

router.route("/:id").get(getuser).patch(updateuser).delete(deleteuser)
router.route("/login").post(loginuser)
router.route("/register").post(registeruser)

module.exports = router;