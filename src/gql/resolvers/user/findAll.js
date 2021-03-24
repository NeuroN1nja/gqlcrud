const findAll = (_, {
    skip,
    limit
}, {
    models
}) => {
    return models.User.find({}, null, {
        skip,
        limit
    }).exec()
}

module.exports = findAll