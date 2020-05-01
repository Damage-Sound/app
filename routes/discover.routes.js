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

    const queriesForm = Object.keys(req.query)


    if (queriesForm.length) {
        Album.find({ genre: { $in: queriesForm } })
            .populate('author')
            .populate('songs')
            .limit(30)
            .then(allAlbums => res.render('discover/discover', { allAlbums, destination: 'albums' }))
            .catch(err => console.err('Can´t find the albums', err))

    } else {

        Album.find()
            .populate('author')
            .populate('songs')
            .limit(30)
            .then(allAlbums => res.render('discover/discover', { allAlbums, destination: 'albums' }))
            .catch(err => console.err('Can´t find the albums', err))
    }

})

router.get('/playlists', (req, res, next) => {


    Playlist.find()
        .populate('author')
        .populate('songs')
        .limit(30)
        .then(allPlaylists => res.render('discover/discover', { allPlaylists, destination: 'playlists' }))
        .catch(err => console.err('Can´t find the playlists', err))



})

router.get('/songs', (req, res, next) => {

    const queriesForm = Object.keys(req.query)


    if (queriesForm.length) {

        Song.find({ genre: { $in: queriesForm } })
            .populate('author')
            .limit(30)
            .then(allSongs => res.render('discover/discover', { allSongs, destination: 'songs' }))
            .catch(err => console.err('Can´t find the songs', err))
    } else {

        Song.find()
            .populate('author')
            .limit(30)
            .then(allSongs => res.render('discover/discover', { allSongs, destination: 'songs' }))
            .catch(err => console.err('Can´t find the songs', err))

    }
})








module.exports = router