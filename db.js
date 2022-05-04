const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://taparia:220807@cluster0.fbjet.mongodb.net/Siiec"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("connected to Mongo Successfully")
    })
}

module.exports = connectToMongo;