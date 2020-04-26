const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playlistSchema = new Schema({

    name: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    likes: Number

})

const Playlist = mongoose.model('Playlist', playlistSchema)
module.exports = Playlist