const Class = require('../models/classes')

const getallclasses = async (req, res) => {
    const {subject} = req.query
    const queryObject = {}
    if(subject) {
        queryObject.subject = subject
    }
    const classes = await Class.find(queryObject)
    res.status(200).json({classes})
}
const createclass = async (req, res) =>{
    const singleclass = await Class.create(req.body)
    res.status(201).json({singleclass})
}

const getclass = async (req, res) =>{
    const {id: ClassID} = req.params
    const singleclass = await Class.findOne({_id: ClassID})
    if(!singleclass){
        return res.status(500).json({msg: `No task with id: ${ClassID}`})
    }
    return res.status(200).json({singleclass})
}

const updateclass = async (req, res) =>{
    const {id: ClassID} = req.params
    const singleclass = await Class.findByIdAndUpdate({_id: ClassID}, req.body, {
        new: true,
        runValidators: true
    })
    if(!singleclass){
        return res.status(500).send(`No task with id: ${ClassID}`)
    }
    res.status(200).json({msg: 'Congratulations'})
}


const deleteclass = async (req, res) =>{
    const {id: ClassID} = req.params
    const  singleclass = await Class.findByIdAndDelete({_id: ClassID})
    if(!singleclass){
        return res.status(500).send(`No task with id: ${ClassID}`)
    }
    res.status(200).json({msg: 'Congratulations'})
}

module.exports = {
    getallclasses,
    createclass,
    getclass,
    updateclass,
    deleteclass
}