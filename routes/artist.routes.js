const express = require("express")
const router = express.Router()

const User = require('../models/user.model')
const Playlist = require('../models/playlist.model')
const Album = require('../models/album.model')
const Song = require('../models/song.model') 




router.get('/:id', (req, res, next) => {

    let userInfo
    User.findById(req.params.id)
        .then(theUser => {
            userInfo = theUser
            const promises = [
                Song.find({author: theUser.id}),
                Playlist.find({author: theUser.id}),
                Album.find({author: theUser.id})
            ]
            return Promise.all(promises)
        })
        .then(responses => {
            console.log('ENTRA AQUI')
            res.render('artist', {user: userInfo, songs: responses[0], playlists: responses[1], albums: responses[2]})})
        .catch(err => console.log('Can´t find the albums', err))
})


module.exports = router