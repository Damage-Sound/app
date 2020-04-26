const mongoose = require('mongoose')
const Schema = mongoose.Schema

const songSchema = new Schema({

    name: String,
    genre: {
        type: String,
        enum: ['bachata', 'alternative rock', 'hard rock', 'bossa nova', 'punk', 'blues', 'classical', 'country', 'dance', 'deep house', 'dubstep', 'techno', 'house', 'trance', 'electronic', 'hip-hop', 'rap', 'indie', 'jazz', 'flamenco', 'reggeaton', 'salsa', 'meditation', 'pop', 'progressive', 'r&b', 'soul', 'reggae', 'rock', 'metal']
    },
    album: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }],
    likes: Number,
    plays: {
        type: Number,
        locations: [{
            name: String,
            plays: Number,
        }]
    },
    comments: [{
        comment: String
    }],
    cover: String


}, {
    timestamps: true
})

const Song = mongoose.model('Song', songSchema)
module.exports = Song