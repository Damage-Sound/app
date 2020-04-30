const express = require("express")
const router = express.Router()
const passport = require("passport")

const User = require("../../models/user.model")
const Song = require('../../models/song.model')
const Playlist = require('../../models/playlist.model')
const Album = require('../../models/album.model')

// Login Controller
const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login')

// Session Controller
const isUser = id => (req, res, next) => req.user.id.includes(id)


// router.get('/', checkLoggedIn, (req, res, next) => { // Security Check
router.get('/', (req, res, next) => {
    // isUser(req.query.user)(req, res, next) // Security check

    if ('user' in req.query) {
        User.findById(req.query.user)
            .then(foundUser => {
                const { followers, following, username, profileImg, comments } = foundUser
                res.json({ followers, following, username, profileImg, comments })
            })
            .catch(error => next(error))
    }
    if ('song' in req.query) {
        Song.findById(req.query.song)
            .then(foundSong => res.json(foundSong))
            .catch(error => next(error))
    }
    if ('album' in req.query) {
        Album.findById(req.query.album)
            .then(foundAlbum => res.json(foundAlbum))
            .catch(error => next(error))
    }
    if ('playlist' in req.query) {
        Playlist.findById(req.query.playlist)
            .then(foundPlaylist => res.json(foundPlaylist))
            .catch(error => next(error))
    }

})


router.get('/play', (req, res, next) => {
    const { songID } = req.query
    console.log(songID)

    Song.findById(songID)
        .then(foundSong => {
            const likes = foundSong.likes + 1
            Song.findByIdAndUpdate(foundSong.id, { likes })
        })
        .then(response => res.json(response))
        .catch(error => console.log(error))
})


module.exports = router