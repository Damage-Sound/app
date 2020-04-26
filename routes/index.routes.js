const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
// const multer = require('multer');
const User = require('../models/user.model');
const cloudinaryUploader = require('../configs/cloudinary.config')


router.get('/', (req, res) => res.render('index'))

router.get('/upload', (req, res, next) => {
    res.render('upload')
})

// --------
// const uploadLocal = multer({ dest: "./public/uploads/" });

router.post("/upload",(req, res, next) => {
    console.log(req.body);
    // console.log(req.file);
});
// ----------


// router.post('/upload', cloudinaryUploader.single('songFile'), (req, res, next) => {

//     console.log(req.file)

//     // User.create({
//     //     name: req.file.filename,
//     //     path: req.file.url
//     // })
//     //     .then()
//     //     .catch(error => new Error(error))
// })


module.exports = router