const User = require('../models/User')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

module.exports = {
    typeDefs,
    resolvers,
    context: () => {
        return {
            models: {
                User
            }
        }
    }
}