const express = require("express")
const router = express.Router()
const User = require('../models/user.model')
const Playlist = require('../models/playlist.model')
const Album = require('../models/album.model')
const Song = require('../models/song.model')




router.get('/', (req, res, next) => {

    User.find()
        .then(allUsers => res.render('discover/discover', { allUsers }))
        .catch(err => console.log('Can´t find the users', ))

})


router.get('/albums', (req, res, next) => {

    Album.find()
        .populate('author')
        .populate('songs')
        .then(allAlbums => res.render('discover/discover', { allAlbums }))
        .catch(err => console.err('Can´t find the albums', err))

})

router.get('/playlists', (req, res, next) => {

    Playlist.find()
        .populate('author')
        .populate('songs')
        .then(allPlaylists => res.render('discover/discover', { allPlaylists }))
        .catch(err => console.err('Can´t find the playlists', err))

})

router.get('/songs', (req, res, next) => {

    Song.find()
        .populate('author')
        .then(allSongs => res.render('discover/discover', { allSongs }))
        .catch(err => console.err('Can´t find the songs', err))

})




module.exports = router


// router.get('/', checkLoggedIn, (req, res, next) => {
//     let userInfo
//     User.findById(req.user.id)
//         .then(foundUser => {
//             userInfo = foundUser
//             const promises = [
//                 Song.find({ author: foundUser.id }),
//                 Playlist.find({ author: foundUser.id }),
//                 Album.find({ author: foundUser.id }),
//             ]
//             return Promise.all(promises)
//         })
//         .then((responses) => res.render('profile', { userInfo, songs: responses[0], playlists: responses[1], albums: responses[2] }))
//         .catch(error => next(error))
// })