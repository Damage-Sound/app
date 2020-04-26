require('dotenv').config()

const mongoose = require('mongoose')
const faker = require('faker')
const Song = require('../models/song.model')
const Playlist = require('../models/playlist.model')
const User = require('../models/user.model')
const Album = require('../models/album.model')

mongoose.connect(`mongodb+srv://${process.env.MONGODBUSER}:${process.env.MONGODBPASSWORD}@damagesound-t1udi.gcp.mongodb.net/${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true })

Song.collection.drop()
Playlist.collection.drop()
User.collection.drop()
Album.collection.drop()

const bcrypt = require("bcrypt")
const bcryptSalt = 10
const salt = bcrypt.genSaltSync(bcryptSalt)



const users = []

for (let i = 1; i <= 100; i++) {

    users = [{
        username: faker.internet.userName(),
        password: bcrypt.hashSync('sasasa', salt),
        email: faker.internet.email(),
        album: [{
            name: faker.random.word(),
            genre: 'alternative rock',
            songs: [{
                name: faker.random.word(),
                genre: 'house',
                url: 'http://www.mariomayhem.com/downloads/sound_tracks/Super_Mario_Bros._1/01-main-theme-overworld.mp3',
                likes: faker.random.number(),
                plays:  {
                    plays: faker.random.number(),
                    location: [{
                        name: faker.address.country(),
                        plays: faker.random.number()
                    }]
                },
                comments: [{
                    comment: faker.lorem.sentences(),
                    author: {
                        username: faker.internet.userName()
                    }
                }],
                cover: faker.image.abstract()
            }],
            likes: faker.random.number()
        }],
        songs: [{
            name: faker.random.word(),
            genre: 'trance',
            url: 'http://www.mariomayhem.com/downloads/sound_tracks/Super_Mario_Bros._1/01-main-theme-overworld.mp3',
            likes: faker.random.number(),
            plays:  {
                plays: faker.random.number(),
                location: [{
                    name: faker.address.country(),
                    plays: faker.random.number()
                }]
            },
            comments: [{
                comment: faker.lorem.sentences(),
                author: {
                    username: faker.internet.userName()
                }
            }],
            cover: faker.image.abstract()
        }],
        likes: faker.random.number(),
        location: faker.address.country(),
        followers: [{
                username: faker.internet.username()
            },
            {
                username: faker.internet.username()
            },
            {
                username: faker.internet.username()
            }
        ],
        following: [{
                username: faker.internet.username()
            },
            {
                username: faker.internet.username()
            },
            {
                username: faker.internet.username()
            }
        ],
        comments: [{
                comment: faker.lorem.sentences(),
                author: {
                    username: faker.internet.userName()
                }
            },
            {
                comment: faker.lorem.sentences(),
                author: {
                    username: faker.internet.userName()
                }
            },
            {
                comment: faker.lorem.sentences(),
                author: {
                    username: faker.internet.userName()
                }
            }
        ],
        playlists: [{
            name: faker.random.word(),
            author: {
                username: faker.internet.userName()
            },
            songs: [{
                    name: faker.random.word(),
                    genre: 'trance',
                    url: 'http://www.mariomayhem.com/downloads/sound_tracks/Super_Mario_Bros._1/01-main-theme-overworld.mp3',
                    likes: faker.random.number(),
                    plays:  {
                        plays: faker.random.number(),
                        location: [{
                            name: faker.address.country(),
                            plays: faker.random.number()
                        }]
                    },
                    comments: [{
                        comment: faker.lorem.sentences(),
                        author: {
                            username: faker.internet.userName()
                        }
                    }],
                    cover: faker.image.abstract()
                },
                {
                    name: faker.random.word(),
                    genre: 'trance',
                    url: 'http://www.mariomayhem.com/downloads/sound_tracks/Super_Mario_Bros._1/01-main-theme-overworld.mp3',
                    likes: faker.random.number(),
                    plays:  {
                        plays: faker.random.number(),
                        location: [{
                            name: faker.address.country(),
                            plays: faker.random.number()
                        }]
                    },
                    comments: [{
                        comment: faker.lorem.sentences(),
                        author: {
                            username: faker.internet.userName()
                        }
                    }],
                    cover: faker.image.abstract()
                }
            ],
            followers: [{
                    username: faker.internet.username()
                },
                {
                    username: faker.internet.username()
                },
                {
                    username: faker.internet.username()
                }
            ],
            likes: faker.random.number()
        }]

    }]




}