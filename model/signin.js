const mongoose = require('mongoose')

const userSchema={
    _id: mongoose.Schema.Types.ObjectId,
    fullname: mongoose.Schema.Types.String,
    email:mongoose.Schema.Types.String,
    password: mongoose.Schema.Types.String
}

module.exports =mongoose.model("User",userSchema)