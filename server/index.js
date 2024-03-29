const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const MychatappDBModel = require('./models/chatDBFile');

const app = express();
app.use(express.json())
app.use(cors({
    origin: ["mychatapp-six.vercel.app"],
    methods: ["POST","GET"],
    credentials: true
))

mongoose.connect("mongodb+srv://justhasim0:king12345king@thedb.m7fz0zt.mongodb.net/thedb?retryWrites=true&w=majority&appName=thedb");
// mongoose.connect("mongodb://192.168.0.1:27017/MychatappDB");
app.post("/login", (req,res) => { 
    const {email, password} = req.body;
    MychatappDBModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            } else{
                res.json("the password is incorrect")
            }
        } else {
            res.json("Incorect Email ID!")
        }
    })

})
app.post('/register', (req, res) => {
    MychatappDBModel.create(req.body)
    .then(mychatdatas => res.json(mychatdatas))
    .catch(err => res.json(err))
})
app.listen(3001, () => {
    console.log("server Is Running");

})

