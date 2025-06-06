const mongoose = require('mongoose');


const peopleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true 
    },
    mobile: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    role: {
        type: String,
        enum: ["admin","user"],
        default: "user"
    }
},{
    timestamps: true,
})

const People = mongoose.model("people", peopleSchema)

module.exports = People