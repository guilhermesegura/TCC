const Student = require('../models/students')

const getallstudents = async (req, res) => {
    const {turma} = req.query
    const queryObject = {}
    if(turma) {
        queryObject.turma = turma
    }
    const students = await Student.find(queryObject)
    res.status(200).json({students})
}
const createstudent = async (req, res) =>{
    const singlestudent = await Student.create(req.body)
    res.status(201).json({singlestudent})
}

const getstudent = async (req, res) =>{
    const {id: StudentID} = req.params
    const singlestudent = await Student.findOne({_id: StudentID})
    if(!singlestudent){
        return res.status(500).json({msg: `No task with id: ${StudentID}`})
    }
    return res.status(200).json({singlestudent})
}

const updatestudent = async (req, res) =>{
    const {id: StudentID} = req.params
    const singlestudent = await Student.findByIdAndUpdate({_id: StudentID}, req.body, {
        new: true,
        runValidators: true
    })
    if(!singlestudent){
        return res.status(500).send(`No task with id: ${StudentID}`)
    }
    res.status(200).json({msg: 'Congratulations'})
}


const deletestudent = async (req, res) =>{
    const {id: StudentID} = req.params
    const  singlestudent = await Student.findByIdAndDelete({_id: StudentID})
    if(!singlestudent){
        return res.status(500).send(`No task with id: ${StudentID}`)
    }
    res.status(200).json({msg: 'Congratulations'})
}

module.exports = {
    getallstudents,
    createstudent,
    getstudent,
    updatestudent,
    deletestudent
}