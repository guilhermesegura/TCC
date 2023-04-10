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
    res.json(req.body)
}

const updateclass = async (req, res) =>{
    res.json(req.body)
}

const deleteclass = async (req, res) =>{
    res.send("Deletado com sucesso")
}

module.exports = {
    getallclasses,
    createclass,
    getclass,
    updateclass,
    deleteclass
}