const express = require('express')
const router = express.Router()
const multer = require('multer');
const upload = multer()
const User = require('../models/user.model');
const cloudinaryUploader = require('../configs/cloudinary.config')
const bodyParser = require('body-parser')
const cloudinary = require('cloudinary')
const axios = require('axios');


router.get('/', (req, res) => res.render('index'))

router.get('/upload', (req, res, next) => {
    res.render('upload')
})

router.post('/upload', cloudinaryUploader.single('songFile', { resource_type: 'raw' }), (req, res, next) => {
    console.log(req.file)
})


router.get('/play', (req, res, next) => {
    const mario = "https://res.cloudinary.com/damage-sound/video/upload/v1588010871/songs/gwdmguxrwbilyhzgknji.mp3"
    const halo = "https://res.cloudinary.com/damage-sound/video/upload/v1588012959/songs/sbeuh1yxm8z7j9wcuugs.mp3"

    res.render('playSong', { mario, halo })
})

module.exports = router
