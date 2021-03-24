const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    email: {
        type: String,
        required: [true, 'User email is required'],
        unique: true,
        validate: {
            validator: (v) => {
                return /[^@]+@[^@.]+\.[^@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        },
    },
    name: {
        type: String,
        required: [true, 'User name is required'],
        validate: {
            validator: (v) => {
                return v.length > 1;
            },
            message: () => 'Name should contain at least 2 characters'
        },
    },
})

user.virtual('id').get(function () {
    return this._id.toHexString()
})

user.set('toJSON', {
    virtuals: true
})

const User = mongoose.model('User', user);

module.exports = User