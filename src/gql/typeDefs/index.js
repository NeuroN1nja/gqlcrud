const {
    gql
} = require('apollo-server-express')

const typeDefs = gql `
    scalar Email
    
    type User {
        id: ID!
        email: Email!
        name: String!
    }

    type Query {
        user(id: ID!): User!
        users(skip: Int = 0, limit: Int = 10): [User]
    }
      
    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUser(id: ID!, input: UpdateUserInput!): User!
        deleteUser(id: ID!): User!
    }
    
    input CreateUserInput {
        email: Email!
        name: String!
    }
    
    input UpdateUserInput {
        email: Email
        name: String
    }
`;

module.exports = typeDefs