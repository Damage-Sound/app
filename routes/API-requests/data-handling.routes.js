const express = require("express")
const router = express.Router()

const User = require("../../models/user.model")
const Song = require('../../models/song.model')
const Playlist = require('../../models/playlist.model')
const Album = require('../../models/album.model')

router.get('/', (req, res, next) => {

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


// Likes counter updater
router.get('/like/:id', (req, res, next) => {

    const songID = req.params.id

    Song.findById(songID)
        .then(foundSong => {
            const likes = foundSong.likes + 1
            return Song.findByIdAndUpdate(foundSong.id, { likes }, { new: true })
                .then(response => response)
                .catch(error => next(error))
        })
        .then(response => res.json(response.likes))
        .catch(error => next(error))
})


// Plays counter updater
router.get('/play/:id', (req, res, next) => {

    const songID = req.params.id
    console.log(songID)

    Song.findById(songID)
        .then(foundSong => {
            const plays = foundSong.plays
            plays.total++
            return Song.findByIdAndUpdate(foundSong.id, {plays}, { new: true })
                .then(response => response)
                .catch(error => next(error))
        })
        .then(response => res.json(response.plays.total))
        .catch(error => next(error))
})


module.exports = router