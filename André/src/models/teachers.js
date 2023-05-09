const mongoose = require('mongoose')

const {Schema} = mongoose

const TeacherSchema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
        maxlength: [40]
    },
    
    cpf: {
        type: String,
        required: true,
        trim: true,
        maxlength: [11]
    },

    telefone: {
        type: String,
        required: true,
        trim: true,
    },

    turma: {
        type: String,
        trim: true,
        required: true,
        enum: {
            values: ['1DS', '2DS', '3DS'],
            message: '{VALUE} is not a subject'
        }      
    },

    data: {
        type: Date, 
        default: Date.now
    }

})


module.exports = mongoose.model('Teacher', TeacherSchema)