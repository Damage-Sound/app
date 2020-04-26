const express = require('express')
const router = express.Router()
const multer = require('multer');
const upload = multer()
const User = require('../models/user.model');
const cloudinaryUploader = require('../configs/cloudinary.config')
const bodyParser = require('body-parser')
const cloudinary = require('cloudinary')


router.get('/', (req, res) => res.render('index'))

router.get('/upload', (req, res, next) => {
    res.render('upload')
})

router.post('/upload', cloudinaryUploader.single('songFile', {resource_type: 'raw'}), (req, res, next) => {
// router.post('/upload', upload.single('songFile'), (req, res, next) => {    
// router.post('/upload', upload.single('songFile'), (req, res, next) => {

    console.log(req.file)
    
    // User.create({
    //     name: req.file.filename,
    //     path: req.file.url
    // })
    //     .then()
    //     .catch(error => new Error(error))
})


module.exports = router
