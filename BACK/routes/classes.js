import express from "express"
const router = express.Router();


import {getallclasses,createclass, getclass, updateclass, deleteclass} from "../controller/classes.js"

router.route('/').get(getallclasses).post(createclass)
router.route('/:id').get(getclass).patch(updateclass).delete(deleteclass)
export default router;