const deleteUser = (_, {
    id
}, {
    models
}) => {
    return models.User
        .findByIdAndDelete(id)
        .catch(err => {
            return err
        })
}

module.exports = deleteUser