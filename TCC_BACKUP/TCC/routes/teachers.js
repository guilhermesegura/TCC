const express = require("express");
const router = express.Router();

const {
    getallteachers,
    createteacher,
    getteacher,
    updateteacher,
    deleteteacher,
} = require("../controller/teachers")

router.route('/').get(getallteachers).post(createteacher)

router.route('/:id').get(getteacher).patch(updateteacher).delete(deleteteacher)

module.exports = router;