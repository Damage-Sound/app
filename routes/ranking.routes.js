const express = require("express")
const router = express.Router()
const passport = require("passport")
const axios = require('axios')
const Song = require('../models/song.model')


router.get('/', (req, res) => res.render('ranking'))

router.post('/likes', (req, res, next) => {
    
    Song
      .find()
      .sort({likes: -1})
      .limit(10)
           .then(theData => res.render('ranking', {theData}))
           .catch(error => next(error))
})
router.post('/plays', (req, res, next) => {
    
    Song
      .find()
      .sort({plays: -1})
      .limit(10)
           .then(theData => res.render('ranking', {theData}))
           .catch(error => next(error))
})




module.exports = router

//forEach(elm => console.log(parseInt(elm.plays.total), elm.name)))