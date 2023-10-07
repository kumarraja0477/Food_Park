const express = require("express");
const path = require("path");
const app = express();
const html = require("html");
require("./db/conn");
const Register = require("./models/user");
const Massage = require("./models/feedback");

// middleware static 

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "./public");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));


app.set("view engine", "html")



app.get("/", (req, res) => {
    res.redirect("index.html");
});


//signup

app.post("/login", async(req, res) => {
    try {
        const registernewusers = new Register({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.phno,
            username: req.body.username,
            password: req.body.password
        })
        const registered = await registernewusers.save();
        res.redirect("index.html");
        console.log("Signup successful");

    } catch (error) {
        res.status(400).send(error);
    }
})

//login
app.post("/page", async(req, res) => {
    try {
        const username = req.body.uname;
        const password = req.body.password;
        const usernam = await Register.findOne({ username: username });
        if (usernam.password === password) {
            res.redirect("content.html");
            console.log("LoggedIn");
        } else {
            res.send("Password wrong")
        }
    } catch (error) {
        res.status(400).send("invalid username")
    }
});



app.post("/feedback", async(req, res) => {
    try {
        const sendmsg = new Massage({
            name: req.body.name,
            email: req.body.email,
            number: req.body.phno,
            massage: req.body.feedback
        })
        const getting = await sendmsg.save();
        console.log("Feedback Submited")
        res.redirect("content.html");
    } catch (error) {
        res.status(400).send("your error", error);
    }
});




app.listen(port, () => {
    console.log(`server is running at port no: ${port}`)
});

