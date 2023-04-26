const User = require('../models/User')

const updateuser = async (req, res) =>{
    const {id: UserID} = req.params
    const singleuser = await User.findByIdAndUpdate({_id: UserID}, req.body, {
        new: true,
        runValidators: true
    })
    if(!singleuser){
        return res.status(500).send(`No task with id: ${UserID}`)
    }
    res.status(200).json({msg: 'Congratulations'})
}


const deleteuser = async (req, res) =>{
    const {id: UserID} = req.params
    const  singleuser = await Class.findByIdAndDelete({_id: UserID})
    if(!singleuser){
        return res.status(500).send(`No task with id: ${UserID}`)
    }
    res.status(200).json({msg: 'Congratulations'})
}


module.exports = {
    updateuser,
    deleteuser
}