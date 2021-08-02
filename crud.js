const { UsersModel } = require("./models")


/**
 * Добавление данных в таблицу Users
 * @param {*} name - имя
 * @param {*} text - текст
 */
module.exports.addNewUserData = (name, text) => {
    UsersModel.create(
        {
            name: name,
            text: text
        },
        function (error, data) {
            if (error) throw error
        }
    )
}

/**
 * Достает все данные из таблицы Users
 * @param {*} response - ответ сервера
 */
module.exports.findAllUsersData = (response) => {
    UsersModel.find({}, (error, data) => {
        if (error) throw error
        response.json(data)
    })
}

/**
 * Обновление данных в таблице Users
 * @param {*} pastName - имя, которое надо изменить
 * @param {*} pastText - текст, который надо изменить
 * @param {*} futureName - имя, на которое меняется
 * @param {*} futureText - текст, на который меняется
 */
module.exports.updateUserData = (
    pastName,
    pastText,
    futureName,
    futureText
) => {
    UsersModel.updateOne(
        {
            name: pastName,
            text: pastText
        },
        {
            name: futureName,
            text: futureText
        },
        function (error, data) {
            if (error) throw error
        }
    )
}

/**
 * Удаление данных из таблицы Users
 * @param {*} user_id - номер записи 
 * @param {*} name - имя
 */
module.exports.deleteUserData = (user_id, name) => {
    UsersModel.deleteOne(
        {
            _id: user_id,
            name: name
        },
        function (error, data) {
            if (error) throw error
        }
    )
}
