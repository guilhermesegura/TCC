const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}
// conferir esses parametros na store API

module.exports = connectDB