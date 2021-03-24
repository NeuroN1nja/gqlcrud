const GraphQLEmail = require('graphql-custom-types').GraphQLEmail
const user = require('./user')

const resolvers = {
    Query: {
        user: user.findOne,
        users: user.findAll,
    },
    Mutation: {
        createUser: user.createUser,
        updateUser: user.updateUser,
        deleteUser: user.deleteUser,
    },
    Email: GraphQLEmail
};

module.exports = resolvers