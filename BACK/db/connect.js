import mongoose from "mongoose"

const connectDB = (url) => {
    return mongoose.connect(url)
}
// conferir esses parametros na store API

export default connectDB