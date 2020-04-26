const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({

    username: String,
    password: String,
    email: String,
    albums: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }],
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    likes: Number,
    location: String,
    followers: [{
        type: Schema.Types.ObjectId,
        res: 'User'
    }],
    following: [{
        type: Schema.Types.ObjectId,
        res: 'User'
    }],
    comments: [{
        comment: String,
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
    playlists: [{
        type: Schema.Types.ObjectId,
        ref: 'Playlist'
    }]
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User