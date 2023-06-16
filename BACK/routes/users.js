import { Router } from "express";
import auth from "../middleware/auth.js";
import roleCheck from "../middleware/roleCheck.js";

import User from "../models/User.js";
const router = Router();


// essa rota aqui, ela pode ser clonada e feita para outras permissões, como user, admin, super_admin
router.get("/admin", auth, roleCheck(["admin"]), (req, res) => {
	res.status(200).json({ message: "user authenticated." });
});

router.get("/user", auth, (req, res) => {
	res.status(200).json({ message: "user authenticated." });
});



router.get("/", async (req, res)=>{
	const users = await User.find({})
    res.status(200).json({users})
})

router.get("/email", async (req,res)=>{
    const {email} = req.query
    const queryObject = {}
    if(email) {
        queryObject.email = email
    }
    const user = await User.findOne(queryObject)
    res.status(200).json({user})
})

router.get("/:id", async(req, res)=>{
	const id= req.params.id
 
    const user = await User.findById(id) 

    if(!user){
        return res.status(404).json({msg:'usuário não encontrado!'})    
    }
    res.status(200).json({user})
})

router.patch("/:id", async(req, res)=>{
	const {id: UserID} = req.params
    const singleuser = await User.findByIdAndUpdate({_id: UserID}, req.body, {
        new: true,
        runValidators: true
    })
    if(!singleuser){
        return res.status(500).send(`No User with id: ${UserID}`)
    }
    res.status(200).json(singleuser)
})

router.delete("/:id", async(req,res)=>{
	const {id: UserID} = req.params
    const  singleuser = await User.findByIdAndDelete({_id: UserID})
    if(!singleuser){
        return res.status(500).send(`No User with id: ${UserID}`)
    }
    res.status(200).json({msg: 'Congratulations'})
})


export default router;