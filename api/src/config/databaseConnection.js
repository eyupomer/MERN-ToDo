const mongoose = require("mongoose")

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
        console.log("Connected to mongoDB successfully :)");
    } catch (error) {
        throw error
    }
}

module.exports = connect
// mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("Connected to Database Successfully :)");
// }).catch((err) => console.log("Something went wrong about DB :" + err))