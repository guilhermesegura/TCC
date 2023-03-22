const express = require("express");
const router = express.Router();

const {
    getallclasses,
    createclass,
    getclass,
    updateclass,
    deleteclass,
} = require("../controller/classes")

router.route('/').get(getallclasses).post(createclass)
router.route('/materia').get(getclass)
router.route('/id').patch(updateclass).delete(deleteclass)
module.exports = router;