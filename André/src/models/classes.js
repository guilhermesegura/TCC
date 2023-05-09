const mongoose = require('mongoose')

const {Schema} = mongoose

const ClassSchema = new Schema({
    titulo: {
        type: String,
        required: true,
        trim: true,
        maxlength: [20]
    },
    texto: {
        type: String,
        required: true
    },
    materia: {
        type: String,
        trim: true,
        required: true,
        enum: {
            values: ['Lógica', 'PW1', 'Ética'],
            message: '{VALUE} is not a subject'
        }
        
    },
    data: {
        type: Date, 
        default: Date.now

    }

})


module.exports = mongoose.model('Class', ClassSchema)