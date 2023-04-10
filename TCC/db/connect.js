const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url)
}
// conferir esses parametros na store API

module.exports = connectDB