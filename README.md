# Тестовое с graphql #
[Посмотреть можно тут](https://gql-test-crud.herokuapp.com/)

## Как запустить
Создать в корне `.env` файл 
```
DB_URI=<YOU_MONGO_API_KEY>
BASE_URL=<HOST_URL or localhost>
```
Установить зависимости и сбилдить клиент
```
cd client
npm install
npm run build-prod
```

Установить зависимости на сервере и запустить
```
cd ..
npm install
npm start
```

