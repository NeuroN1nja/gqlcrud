const findOne = (_, {
    id
}, {
    models
}) => {
    return models.User.findById(id)
}

module.exports = findOne