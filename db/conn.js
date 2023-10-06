const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://kumarraja8:350hNxxi0oo98hS3@cluster0.fcvqith.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true }).then(() => {
    console.log("success")
}).catch((error) => {
    console.log(error);
})