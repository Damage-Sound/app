const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playlistSchema = new Schema({

    name: String,
    author: {
        type: SchemaTypesObjectId,
        ref: 'User'
    },
    songs: [{
        type: SchemaTypesObjectId,
        ref: 'Song'
    }],
    followers: [{
        type: SchemaTypesObjectId,
        ref: 'User'
    }],
    likes: Number

})

const Playlist = mongoose.model('Playlist', playlistSchema)
module.exports = Playlist