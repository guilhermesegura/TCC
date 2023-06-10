// const mongoose = require('mongoose')

// const User = mongoose.model('User',{
//     name:String,
//     email:String,
//     password:String

// })

// module.exports = User
const mongoose = require('mongoose')

const {Schema} = mongoose

const UserSchema = new Schema({
   
    email :{
        type: String,
        required: true,
        trim: true,
        maxlength: [100]
    },

    password: {
        type: String,
        required: true,
        trim: true,
        maxlength: [200] // a senha vai voltar na forma de hash, ai tem q deixar isso com um número maior.
    },

    permissao: {
        type: String,
        required: true,
        trim: true,
        enum: {
            values: ['ADMIN', 'Aluno', 'Professor'],
            message: '{VALUE} is not a permission'}
    },

     
    data: {
        type: Date, 
        default: Date.now
    }

})


module.exports = mongoose.model('User', UserSchema)