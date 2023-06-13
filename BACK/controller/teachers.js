const Teacher = require('../models/teachers')

const getallteachers = async (req, res) => {
    const {turma} = req.query
    const queryObject = {}
    if(turma) {
        queryObject.turma = turma
    }
    const teachers = await Teacher.find(queryObject)
    res.status(200).json({teachers})
}
const createteacher = async (req, res) =>{
    const singleteacher = await Teacher.create(req.body)
    res.status(201).json({singleteacher})
}

const getteacher = async (req, res) =>{
    const {id: TeacherID} = req.params
    const singleteacher = await Teacher.findOne({_id: TeacherID})
    if(!singleteacher){
        return res.status(500).json({msg: `No task with id: ${TeacherID}`})
    }
    return res.status(200).json({singleteacher})
}

const updateteacher = async (req, res) =>{
    const {id: TeacherID} = req.params
    const singleteacher = await Teacher.findByIdAndUpdate({_id: TeacherID}, req.body, {
        new: true,
        runValidators: true
    })
    if(!singleteacher){
        return res.status(500).send(`No task with id: ${TeacherID}`)
    }
    res.status(200).json({msg: 'Congratulations'})
}


const deleteteacher = async (req, res) =>{
    const {id: TeacherID} = req.params
    const  singleteacher = await Teacher.findByIdAndDelete({_id: TeacherID})
    if(!singleteacher){
        return res.status(500).send(`No task with id: ${TeacherID}`)
    }
    res.status(200).json({msg: 'Congratulations'})
}

module.exports = {
    getallteachers,
    createteacher,
    getteacher,
    updateteacher,
    deleteteacher
}