## CRUD: express + mongodb

1. Установка всех зависимостей:

    ``yarn install``

2. Установка и запуск mongodb через docker:
   
   ``sudo docker run -d --name mongo_1 -v /opt/mongodb/etc/mongod.log:/var/log/mongodb/mongod.log -v /opt/mongodb/data:/data -p 127.0.0.1:27017:27017 mongo``
   
3. Запуск mongodb через docker:

   ``docker start mongo_1``

4. Запуск сервера:

    ``yarn start``

5. Отправка запросов на сервер:

    5.1. GET
    
    ``curl http://localhost:3000/all_users``
    
    5.2. POST
    
    ``curl htt-d "name=__name__&text=__text__" -X POST http://localhost:3000/add_new_data/``
    
    5.3. PUT

    ``curl --request PUT --url http://localhost:3000/update_user_data/ --header 'content-type: application/x-www-form-urlencoded' --data "pastName=__name__&pastText=__text__&futureName=__new_name__&futureText=__new_text__"``

    5.4. DELETE

    ``curl -X DELETE http://localhost:3000/delete_user_data/__id__/__name__``
