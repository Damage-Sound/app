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

for (let i = 1; i <= 5; i++) {

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
        author: {}

    })

}


// User.create(users)
//     .then(response => console.log(response))
//     .catch(error => console.log(error))


const promises = [User.create(users), Song.create(songs)]
Promise.all(promises)
    .then(responses => responses[0].map((user, index) => Object.assign({}, responses[index], {author: user._id})))
    .catch(error => console.log(error))

// User.create(users)
//     .then(allUsers => {
//         // allUsers.forEach((user, index) => {
//         //     songs[index].author = { username: user.username, location: user.location, id: user.id }
//         //     Song.create(songs[index])
//         //         .then(songCreated => {
//         //             console.log("song Created: ", songCreated)
//         //             console.log("User: ", user)
//         //         })

//         // })
//         console.log(allUsers)
//     })
//     // .then((response) => console.log('Response', response))
//     .catch(err => console.log(`Ups, something wrong happenedL ${err}`))


// Song.create(songs)
//     .then(allSongs => {
//         console.log(`${allSongs.length} songs created!`)
//     })
//     .catch(err => console.log(`Ups, something wrong happenedL ${err}`))










//     users.push({
//         username: faker.internet.userName(),
//         password: bcrypt.hashSync('sasasa', salt),
//         email: faker.internet.email(),
//         album: [{
//             name: faker.random.word(),
//             genre: 'alternative rock',
//             songs: [{
//                 name: faker.random.word(),
//                 genre: 'house',
//                 url: 'http://www.mariomayhem.com/downloads/sound_tracks/Super_Mario_Bros._1/01-main-theme-overworld.mp3',
//                 likes: faker.random.number(),
//                 plays:  {
//                     plays: faker.random.number(),
//                     location: [{
//                         name: faker.address.country(),
//                         plays: faker.random.number()
//                     }]
//                 },
//                 comments: [{
//                     comment: faker.lorem.sentences(),
//                     author: {
//                         username: faker.internet.userName()
//                     }
//                 }],
//                 cover: faker.image.abstract()
//             }],
//             likes: faker.random.number()
//         }],
//         songs: [{
//             name: faker.random.word(),
//             genre: 'trance',
//             url: 'http://www.mariomayhem.com/downloads/sound_tracks/Super_Mario_Bros._1/01-main-theme-overworld.mp3',
//             likes: faker.random.number(),
//             plays:  {
//                 plays: faker.random.number(),
//                 location: [{
//                     name: faker.address.country(),
//                     plays: faker.random.number()
//                 }]
//             },
//             comments: [{
//                 comment: faker.lorem.sentences(),
//                 author: {
//                     username: faker.internet.userName()
//                 }
//             }],
//             cover: faker.image.abstract()
//         }],
//         likes: faker.random.number(),
//         location: faker.address.country(),
//         followers: [{
//                 username: faker.internet.userName()
//             },
//             {
//                 username: faker.internet.userName()
//             },
//             {
//                 username: faker.internet.userName()
//             }
//         ],
//         following: [{
//                 username: faker.internet.userName()
//             },
//             {
//                 username: faker.internet.userName()
//             },
//             {
//                 username: faker.internet.userName()
//             }
//         ],
//         comments: [{
//                 comment: faker.lorem.sentences(),
//                 author: {
//                     username: faker.internet.userName()
//                 }
//             },
//             {
//                 comment: faker.lorem.sentences(),
//                 author: {
//                     username: faker.internet.userName()
//                 }
//             },
//             {
//                 comment: faker.lorem.sentences(),
//                 author: {
//                     username: faker.internet.userName()
//                 }
//             }
//         ],
//         playlists: [{
//             name: faker.random.word(),
//             author: {
//                 username: faker.internet.userName()
//             },
//             songs: [{
//                     name: faker.random.word(),
//                     genre: 'trance',
//                     url: 'http://www.mariomayhem.com/downloads/sound_tracks/Super_Mario_Bros._1/01-main-theme-overworld.mp3',
//                     likes: faker.random.number(),
//                     plays:  {
//                         plays: faker.random.number(),
//                         location: [{
//                             name: faker.address.country(),
//                             plays: faker.random.number()
//                         }]
//                     },
//                     comments: [{
//                         comment: faker.lorem.sentences(),
//                         author: {
//                             username: faker.internet.userName()
//                         }
//                     }],
//                     cover: faker.image.abstract()
//                 },
//                 {
//                     name: faker.random.word(),
//                     genre: 'trance',
//                     url: 'http://www.mariomayhem.com/downloads/sound_tracks/Super_Mario_Bros._1/01-main-theme-overworld.mp3',
//                     likes: faker.random.number(),
//                     plays:  {
//                         plays: faker.random.number(),
//                         location: [{
//                             name: faker.address.country(),
//                             plays: faker.random.number()
//                         }]
//                     },
//                     comments: [{
//                         comment: faker.lorem.sentences(),
//                         author: {
//                             username: faker.internet.userName()
//                         }
//                     }],
//                     cover: faker.image.abstract()
//                 }
//             ],
//             followers: [{
//                     username: faker.internet.userName()
//                 },
//                 {
//                     username: faker.internet.userName()
//                 },
//                 {
//                     username: faker.internet.userName()
//                 }
//             ],
//             likes: faker.random.number()
//         }]

//     })


// }


// const createSongs = users.map(user => {
//     const newSong = new Song(user.songs)
//     return newSong.save()
//         .then(song => {
//             return song.data
//         })
//         .catch(error => {
//             throw new Error(`Impossible to add the song. ${error}`)
//         })
// })

// const createAlbums = users.map(user => {
//     const newAlbum = new Album(user.albums)
//     return newAlbum.save()
//         .then(album => {
//             return album.data
//         })
//         .catch(error => {
//             throw new Error(`Imposible to add the album. ${error}`)
//         })
// })


// const createPlaylists = users.map(user => {
//     const newPlaylist = new Playlist(user.playlists)
//     return newPlaylist.save()
//         .then(playlist => {
//             return playlist.data
//         })
//         .catch(error => {
//             throw new Error(`Imposible to add the playlist. ${error}`)
//         })
// })


// let findSongs = Promise.all(createSongs, createAlbums, createPlaylists)
//     .then(songs => {
//         return users.map(user => {
//             return Song.find()
//                 .then(song => {
//                     return song.data
//                 })
//         })
//     })
//     .catch(error => {
//         throw new Error(error)
//     })



// const saveUsers = findSongs.then(findSongs => {
//     return Promise.all(findSongs)
//         .then(users => {
//             return users.map(user => {
//                 const newUser = new User(user);
//                 return newUser.save();
//             })
//         })
// }).then(savedUsers => {
//     Promise.all(savedUsers)
//         .then(users => console.log(`${users.length} users created`))
//         .then(() => mongoose.connection.close())
//         .catch(err => console.log("Error while saving the book: ", err))
// })