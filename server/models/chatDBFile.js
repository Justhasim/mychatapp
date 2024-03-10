const mongoose = require('mongoose')

const MychatappDBSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String

});

const MychatappDBModel = mongoose.model("mychatdatas",MychatappDBSchema)
module.exports = MychatappDBModel
