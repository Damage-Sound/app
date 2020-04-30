const express = require("express")
const router = express.Router()
const passport = require("passport")
const axios = require('axios')

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


// Likes counter updater
router.get('/like/:id', (req, res, next) => {

    console.log('-----------------------------------------------------')
    console.log('LIKE')
    console.log('-----------------------------------------------------')

    const songID = req.params.id

    Song.findById(songID)
        .then(foundSong => {
            const likes = foundSong.likes + 1
            return Song.findByIdAndUpdate(foundSong.id, { likes }, { new: true })
                .then(response => console.log('---------------------------------- LIKES AFTER UPDATE -------------', response))
                .catch(error => console.log('error: ', error))
        })
        .then(response => res.json(response.plays.total))
        .catch(error => next(error))
})


// Plays counter updater
router.get('/play/:id', (req, res, next) => {

    const songID = req.params.id

    //     axios({
    //         method: 'post',
    //         url: `http://www.damage-sound.herokuapp.com/locate/`
    //     })
    //     .then(response => console.log('everything is fine', response))
    //     .catch(error => console.log('error locating user', error))

    // Song.findById(songID)
    //     .then(foundSong => {
    //         const plays = foundSong.plays.total + 1
    //         return Song.findByIdAndUpdate(foundSong.id, { plays }, { new: true })
    //             .then(response => res.json(response))
    //             .catch(error => console.log('error: ', error))
    //     })
    //     .then(response => console.log('updated', response))
    //     .catch(error => console.log(error))
})


module.exports = router