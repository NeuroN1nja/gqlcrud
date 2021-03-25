const createUser = (_, {
    input: {
        name,
        email
    }
}, {
    models
}) => {
    return models.User
        .create({
            name,
            email
        })
}

module.exports = createUser