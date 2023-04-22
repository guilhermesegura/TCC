const express = require("express");
const router = express.Router();

const {
    getallstudents,
    createstudent,
    getstudent,
    updatestudent,
    deletestudent,
} = require("../controller/students")

router.route('/').get(getallstudents).post(createstudent)

router.route('/:id').get(getstudent).patch(updatestudent).delete(deletestudent)

module.exports = router;