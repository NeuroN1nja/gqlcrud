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
        .catch(err => {
            return err
        })
}

module.exports = createUser