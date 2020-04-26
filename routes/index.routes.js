const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('index'))
router.get('/locate', (req, res) => res.render("location"))
module.exports = router