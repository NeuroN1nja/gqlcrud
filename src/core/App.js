require('dotenv').config()

const path = require('path')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const {
    ApolloServer,
} = require('apollo-server-express')

const {
    typeDefs,
    resolvers,
    context,
} = require('../gql')


class App {
    constructor() {
        this.app = express()
        this.init()
    }

    init() {
        if (process.env.NODE_ENV === 'production') {
            const staticFolder = path.join(__dirname, '../../client/dist')
            this.app.set('view-engine', 'ejs')
            this.app.use(express.static(staticFolder))

            this.app.get('/', function (req, res) {
                res.render(path.join(staticFolder, 'index.ejs'), {
                    BASE_URL: process.env.BASE_URL,
                })
            });
        }

        this.connectDb();
        this.startGql();
        this.applyMiddlewares();
        this.startServer();
    }

    connectDb() {
        mongoose.connect(process.env.DB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            })
            .then(() => console.log('Database connected!'))
            .catch(err => console.log(err))
    }

    applyMiddlewares() {
        this.app.use(cors())
    }

    startGql() {
        const server = new ApolloServer({
            typeDefs,
            resolvers,
            context,
        })

        server.applyMiddleware({
            app: this.app
        });
    }

    startServer() {
        const port = process.env.PORT || 3030
        this.app.listen({
            port,
        }, () => {
            console.log(`Server is listening on ${port}`)
        })
    }
}

module.exports = App