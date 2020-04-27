const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema({

    name: String,
    genre: [{
        type: String,
        enum: ['bachata', 'alternative rock', 'hard rock', 'bossa nova', 'punk', 'blues', 'classical', 'country', 'dance', 'deep house', 'dubstep', 'techno', 'house', 'trance', 'electronic', 'hip-hop', 'rap', 'indie', 'jazz', 'flamenco', 'reggeaton', 'salsa', 'meditation', 'pop', 'progressive', 'r&b', 'soul', 'reggae', 'rock', 'metal']
    }],
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    likes: Number,


})

const Album = mongoose.model('Album', albumSchema)
module.exports = Album