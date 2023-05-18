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
router.route('/:id').get(getclass).patch(updateclass).delete(deleteclass)
module.exports = router;