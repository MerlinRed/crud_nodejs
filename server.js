const express = require("express")
const bodyParser = require("body-parser")
const {
    addNewUserData,
    findAllUsersData,
    updateUserData,
    deleteUserData
} = require("./crud")
const port = 3000
const app = express()

// добавление парсера для body
app.use(bodyParser.urlencoded({ extended: true }))

/**
 * Возвращает все данные из таблицы
 */
app.get("/all_users/", (request, response) => {
    findAllUsersData(response)
})

/**
 * Добавляет новые данные по ключам name и text
 */
app.post("/add_new_data/", (request, response) => {
    const name = request.body["name"]
    const text = request.body["text"]
    addNewUserData(name, text)
    response.sendStatus(201)
})

/**
 * Обновляет данные в таблице Users, по ключам pastName, pastText, futureName, futureText
 */
app.put("/update_user_data/", (request, response) => {
    const pastName = request.body["pastName"]
    const pastText = request.body["pastText"]
    const futureName = request.body["futureName"]
    const futureText = request.body["futureText"]
    updateUserData(pastName, pastText, futureName, futureText)
    response.sendStatus(200)
})

/**
 * Удаление данных в таблице Users по ключам _id и name
 */
app.delete("/delete_user_data/:user_id/:name", (request, response) => {
    const user_id = request.params['user_id']
    const name = request.params['name']
    deleteUserData(user_id, name)
    response.sendStatus(200)
})

//запуск сервера
app.listen(port, () => console.log(`http://localhost:${port}`))
