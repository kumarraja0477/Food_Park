const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }, email: {
        type: String,
        required: true,
        unique: true
    }, number: {
        type: Number
    }, username: {
        type: String,
        required: true,
        unique: true
    }, password: {
        type: String,
        required: true
    }
})
// we need to create collection
const Register = new mongoose.model("Signup", userSchema);
module.exports = Register;