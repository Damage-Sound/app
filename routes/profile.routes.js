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



router.post('/song', cloudinaryMusicUploader.single('songFile', { resource_type: 'raw' }), (req, res, next) => {
    console.log(req.file)
})
router.post('/img', cloudinaryImgUploader.single('imgFile', { resource_type: 'raw' }), (req, res, next) => {
    console.log(req.file)
})


module.exports = router