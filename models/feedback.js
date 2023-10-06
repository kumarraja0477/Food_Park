const mongoose = require("mongoose");
const mySchema = new mongoose.Schema({
        name: {
            type: String
        },
        email: {
            type: String
        },
        number: {
            type: Number
        },
        massage: {
            type: String
        }
    })
    // we need to create collection
const Massage = new mongoose.model("Feedback", mySchema);
module.exports = Massage;