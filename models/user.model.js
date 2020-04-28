const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({

    username: String,
    password: String,
    email: String,
    profileImg: String,
    likes: Number,
    location: String,
    followers: {
        total: Number,
        followers: [{
            type: Schema.Types.ObjectId,
            res: 'User'
        }]
    },
    following: {
        total: Number,
        following: [{
            type: Schema.Types.ObjectId,
            res: 'User'
        }]
    },
    comments: [{
        comment: String,
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User