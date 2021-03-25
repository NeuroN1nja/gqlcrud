const deleteUser = (_, {
    id
}, {
    models
}) => {
    return models.User
        .findByIdAndDelete(id)
}

module.exports = deleteUser