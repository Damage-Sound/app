require('dotenv').config()

const mongoose = require('mongoose')
const faker = require('faker')
const Song = require('../models/song.model')
const Playlist = require('../models/playlist.model')
const User = require('../models/user.model')
const Album = require('../models/album.model')

mongoose.connect(`mongodb+srv://${process.env.MONGODBUSER}:${process.env.MONGODBPASSWORD}@damagesound-t1udi.gcp.mongodb.net/${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true })

const bcrypt = require("bcrypt")
const bcryptSalt = 10
const salt = bcrypt.genSaltSync(bcryptSalt)


const users = []

for (let i = 1; i <= 5; i++) {

    users.push({

        username: faker.internet.userName(),
        likes: faker.random.number(),
        location: faker.address.country(),
        password: bcrypt.hashSync('lala', salt),
        followers: [],
        following: [],
        email: faker.internet.email(),
        profileImg: faker.internet.avatar()

    })

}

const songs = []

const createSong = (authorID) => {
    
    songs.push({

        name: faker.random.word(),
        genre: 'bachata',
        likes: faker.random.number(),
        plays: [{
            total: faker.random.number(),
            locations: [{
                name: faker.address.city(),
                plays: faker.random.number()
            }]
        }],
        comments: [],
        cover: faker.image.abstract(),
        author: authorID
    })
}

User.create(users)
    .then(allUsers => {
        allUsers.forEach(user => {
            createSong(user.id)
        });
    })
    .then(response => Song.create(songs))
    .catch(error => console.log(error))
