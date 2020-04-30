require('dotenv').config()

// Database
require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()

// Configs
require('./configs/middleware.config')(app)
require('./configs/passport.config')(app)
require('./configs/preformatter.config')(app)
require('./configs/views.configs')(app)
require('./configs/locals.config')(app)

// Base URLS
app.use('/', require('./routes/index.routes'))
app.use('/', require('./routes/auth.routes'))
app.use('/locate', require('./routes/location.routes'))
app.use('/rank', require('./routes/ranking.routes'))
app.use('/profile', require('./routes/profile.routes'))
app.use('/profile/api-request', require('./routes/API-requests/user-data-handling.routes'))
app.use('/api', require('./routes/API-requests/data-handling.routes'))
app.use('/playlist-detail', require('./routes/playlist-detail'))
app.use('/album-detail', require('./routes/album-detail'))
app.use('/discover', require('./routes/discover.routes'))
module.exports = app