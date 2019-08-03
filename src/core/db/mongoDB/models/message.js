const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    description: String,
    status: String
});

module.exports = mongoose.model("message", messageSchema);