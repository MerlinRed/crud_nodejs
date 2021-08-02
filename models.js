const mongoose = require("mongoose");
const { UsersSchema } = require("./schemas")


// создание таблицы Users
module.exports.UsersModel = mongoose.model("main_users", UsersSchema)
