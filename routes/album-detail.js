const express = require("express")
const router = express.Router()

const User = require('../models/user.model')
const Playlist = require('../models/playlist.model')
const Album = require('../models/album.model')
const Song = require('../models/song.model')




router.get('/:id', (req, res, next) => {

    Album.findById(req.params.id)
        .populate('author')
        .populate('songs')
        .then(theAlbum => res.render('detail-pages/album-detail', theAlbum))
        .catch(err => console.err('Can´t find the album', err))
})





module.exports = router