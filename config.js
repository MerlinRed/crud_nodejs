const mongoose = require("mongoose");
module.exports.Schema = mongoose.Schema;
 
// соединение с mongodb
mongoose.connect("mongodb://localhost:27017/usersdb", { useUnifiedTopology: true, useNewUrlParser: true });