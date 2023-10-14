const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:String,
    address:String
},{timestamps:true})

module.exports = mongoose.model('users',UserSchema);
//collection name and schema name