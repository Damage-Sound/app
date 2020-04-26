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

    users.push({
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
                username: faker.internet.userName()
            },
            {
                username: faker.internet.userName()
            },
            {
                username: faker.internet.userName()
            }
        ],
        following: [{
                username: faker.internet.userName()
            },
            {
                username: faker.internet.userName()
            },
            {
                username: faker.internet.userName()
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
                    username: faker.internet.userName()
                },
                {
                    username: faker.internet.userName()
                },
                {
                    username: faker.internet.userName()
                }
            ],
            likes: faker.random.number()
        }]

    })


}


const createSongs = users.map(user => {
    const newSong = new Song(user.songs)
    return newSong.save()
        .then(song => {
            return song.data
        })
        .catch(error => {
            throw new Error(`Impossible to add the song. ${error}`)
        })
})

const createAlbums = users.map(user => {
    const newAlbum = new Album(user.albums)
    return newAlbum.save()
        .then(album => {
            return album.data
        })
        .catch(error => {
            throw new Error(`Imposible to add the album. ${error}`)
        })
})


const createPlaylists = users.map(user => {
    const newPlaylist = new Playlist(user.playlists)
    return newPlaylist.save()
        .then(playlist => {
            return playlist.data
        })
        .catch(error => {
            throw new Error(`Imposible to add the playlist. ${error}`)
        })
})


let findSongs = Promise.all(createSongs, createAlbums, createPlaylists)
    .then(songs => {
        return users.map(user => {
            return Song.find()
                .then(song => {
                    return song.data
                })
        })
    })
    .catch(error => {
        throw new Error(error)
    })



const saveUsers = findSongs.then(findSongs => {
    return Promise.all(findSongs)
        .then(users => {
            return users.map(user => {
                const newUser = new User(user);
                return newUser.save();
            })
        })
}).then(savedUsers => {
    Promise.all(savedUsers)
        .then(users => console.log(`${users.length} users created`))
        .then(() => mongoose.connection.close())
        .catch(err => console.log("Error while saving the book: ", err))
})