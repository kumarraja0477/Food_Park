const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/food-park", { useNewUrlParser: true }).then(() => {
    console.log("success")
}).catch((error) => {
    console.log(error);
})