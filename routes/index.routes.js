const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('index'))

router.get('/upload', (req, res, next) => {
    
})


module.exports = router