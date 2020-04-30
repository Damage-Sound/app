const express = require('express')
const router = express.Router()
const passport = require("passport")

const User = require('../models/user.model')

const mailer = require('../configs/nodemailer.config')
const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('auth/login')

router.get('/:id', (req, res) => {

    User.findById(req.params.id)
        .then(user => res.render('colab-email', user))
        .catch(err => console.log(err))

})


router.post('/:id', checkLoggedIn, (req, res) => {

    let { subject, message } = req.body

    User.findById(req.params.id)
        .then(response => {
            mailer.sendMail({
                from: '"Damage Sound 🎧" <Collaboration request>',
                to: response.email,
                subject: subject,
                text: message,
                html: `<b>${message}. To contact this user, the provided email is: ${req.user.email}</b>`
            })

        })
        .then(info => res.redirect('/'))
        .catch(error => console.log(error));
})


module.exports = router