const express = require('express')
const router = express.Router()
const multer = require('multer')
const cloudinaryMusicUploader = require('../configs/cloudinaryMusic.config')
const cloudinaryImgUploader = require('../configs/cloudinaryImg.config')
const User = require('../models/user.model');
const Song = require('../models/song.model')
const Album = require('../models/album.model')
const Playlist = require('../models/playlist.model')
const ObjectId = require('mongoose').Types.ObjectId
const passport = require('passport')
const bcrypt = require('bcrypt')
const bcryptSalt = 10 

// Login Controller
const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login')

router.get('/', checkLoggedIn, (req, res, next) => {

    let userInfo

    User.findById(req.user.id)
        .then(foundUser => {
            userInfo = foundUser
            const promises = [
                Song.find({ author: foundUser.id }),
                Playlist.find({ author: foundUser.id }),
                Album.find({ author: foundUser.id }),
            ]
            return Promise.all(promises)
        })
        .then((responses) => res.render('profile', { userInfo, songs: responses[0], playlists: responses[1], albums: responses[2] }))
        .catch(error => next(error))
})


router.get('/playlists', checkLoggedIn, (req, res, next) => {

    Playlist.find({ author: req.user.id })
        .populate('songs')
        .then(foundPlaylists => res.json(foundPlaylists))
        .catch(error => next(error))
})

router.get('/albums', checkLoggedIn, (req, res, next) => {

    Album.find({ author: req.user.id })
        .populate('songs')
        .then(foundAlbums => res.json(foundAlbums))
        .catch(error => next(error))
})

router.get('/songs', checkLoggedIn, (req, res, next) => {

    Song.find({ author: req.user.id })
        .populate('comments')
        .then(foundSongs => res.json(foundSongs))
        .catch(error => next(error))
})

router.get('/comments', checkLoggedIn, (req, res, next) => {

    User.findById(req.user.id)
        .populate('author')
        .then(foundUser => res.json(foundUser.comments))
        .catch(error => next(error))
})


router.get('/followers', checkLoggedIn, (req, res, next) => {

    User.findById(req.user.id)
        .populate('followers')
        .then(foundUser => res.json(foundUser.followers))
        .catch(error => next(error))
})

router.get('/following', checkLoggedIn, (req, res, next) => {

    User.findById(req.user.id)
        .populate('following')
        .then(foundUser => res.json(foundUser.following))
        .catch(error => next(error))
})

// router.get('/statistics', checkLoggedIn, (req, res, next) => {

//     Playlist.find({ author: req.user.id })
//         .then(foundPlaylists => res.json(foundPlaylists))
//         .catch(error => next(error))
// })


router.get('/upload', (req, res, next) => {
    res.render('upload')
})
router.post('/upload/song', cloudinaryMusicUploader.single('songFile', { resource_type: 'raw' }), (req, res, next) => {
    console.log(req.file)
})
router.post('/upload/song', cloudinaryMusicUploader.single('songFile', { resource_type: 'raw' }), (req, res, next) => {
    console.log(req.file)
})
router.post('/img', cloudinaryImgUploader.single('imgFile', { resource_type: 'raw' }), (req, res, next) => {
    console.log(req.file)
})

module.exports = router