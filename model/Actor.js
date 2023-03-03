const mongoose = require("mongoose")

const ActorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
         type: String,
        required: true
    }, 
    date: {
        type: String,
        default:Date.now,
    }
})

module.exports = mongoose.model("Actor", ActorSchema)