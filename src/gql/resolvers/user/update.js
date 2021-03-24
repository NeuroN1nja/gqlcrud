const updateUser = (_, {
    id,
    input: {
        name,
        email
    },
}, {
    models
}) => {
    return models.User.findByIdAndUpdate(id, {
        name,
        email
    }, {
        runValidators: true,
        new: true,
    }).catch(err => {
        return err
    })
}

module.exports = updateUser