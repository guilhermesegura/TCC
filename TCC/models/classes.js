import mongoose from 'mongoose'

const {Schema} = mongoose

const ClassSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: [20]
    },
    text: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        trim: true,
        required: true
        
    },
    date: {
        type: Date, default: Date.now

    }

})


module.exports = mongoose.model('Class', ClassSchema)