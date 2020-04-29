const express = require("express")
const router = express.Router()

const User = require('../models/user.model')
const Playlist = require('../models/playlist.model')
const Album = require('../models/album.model')
const Song = require('../models/song.model')




router.get('/:id', (req, res, next) => {

    Playlist.findById(req.params.id)
        .populate('author')
        .populate('songs')
        .then(thePlaylist => res.render('detail-pages/playlist-detail', thePlaylist))
        .catch(err => console.err('Can´t find the playlist', err))
})





module.exports = router