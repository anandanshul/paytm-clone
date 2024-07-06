const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://devanshulanand:xQgp8f13CenQfaIZ@cluster0.hqq1b6r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;