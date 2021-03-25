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
    })
}

module.exports = updateUser