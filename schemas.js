const { Schema } = require("./config")


//создание схемы для таблицы Users
module.exports.UsersSchema = new Schema({
    name: String,
    text: String
})
