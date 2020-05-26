# DamageSound 🎧

DamageSound is a music social platform made to connect creators and listeners.

You can access the app by clicking **[here](http://damage-sound.herokuapp.com/)**

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

* You need to have npm installed.
* Fork and clone this repo.

## Installing

```sh
$ git clone "this repo"
```

```sh
$ npm i 
```

* Create .env and add your port.

```sh
$ npm run dev
```





## Endpoints 

| Id | Method | Path | Description |
| ---| -------| -----| ------------|
| 1. | get    | /    | Show home page |
| 2. | get    | /discover?[filter]*    | Go to discover page, you can filter your songs and artists by genre or popularity | 
| 3. | get    | /search    | Search (by artist, song name) | 
| 4. | post   | /search?[queries]   | Add queries to filter your search | 
| 5. | get    | /ranking/songs    | Show the ranking of the most played or most liked songs| 
| 6. | get    | /ranking/artists    | Show the ranking of the most played or most liked artists| 
| 7. | get    | /ranking/albums| Show the ranking of the most played or most liked albums| 
| 8. | get    | /profile | Show your profile page | 
| 9. | post    | /profile/edit    | Edit your personal profile | 
| 10. | post    | /profile/new-song    | Upload a new song | 
| 11. | get    | /user/:id    | Show details about that user | 
| 12. | get    | /song/:id    | Show details and comments of that song | 
| 13. | post    | /song/:id/comment    | Add a new comment | 
| 14. | get    | /collab/:id    | Show the form to ask for colaboration | 
| 15. | post    | /collab/:id    | Send an email to colaborate | 
| 16. | get    | /about-us/    | General information about this platform | 



## Built With

* [Express](https://expressjs.com/es/) - The web framework used
* [Sass](https://sass-lang.com/) - CSS style extension
* [Passport](http://www.passportjs.org/) - Authentication middleware for NodeJs
* [Multer](https://github.com/expressjs/multer) - Node.js middleware used for upload files
* [MongoDB](https://www.mongodb.com/es) - Data Bases Management
* [Cloudinary](https://cloudinary.com/documentation) - Used to store files
* [Google Geolocation Api ](https://cloud.google.com/maps-platform) - Api used for geolocation users
* [FakerJs](https://github.com/marak/Faker.js/) - Dependency to make massive amount of fake data
* [Nodemailer](https://nodemailer.com/about/) - NodeJs module for email sending


## Models

### User
```javascript
{

    username: String,
    password: String,
    email: String,
    profileImg: String,
    likes: Number,
    location: String,
    followers: {
        total: Number,
        followers: [{
            type: Schema.Types.ObjectId,
            res: 'User'
        }]
    },
    following: {
        total: Number,
        following: [{
            type: Schema.Types.ObjectId,
            res: 'User'
        }]
    },
    comments: [{
        comment: String,
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }],
}, {
    timestamps: true
}
```

### Song

```javascript
{

    name: String,
    url: String,
    likes: Number,
    cover: String,
    genre: {
        type: String,
        enum: ['bachata', 'alternative rock', 'hard rock', 'bossa nova', 'punk', 'blues', 'classical', 'country', 'dance', 'deep house', 'dubstep', 'techno', 'house', 'trance', 'electronic', 'hip-hop', 'rap', 'indie', 'jazz', 'flamenco', 'reggaeton', 'salsa', 'meditation', 'pop', 'progressive', 'r&b', 'soul', 'reggae', 'rock', 'metal']
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    plays: {
        total: Number,
        locations: [{
            name: String,
            plays: Number,
        }]
    },
    comments: [{
        comment: String,
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }],


}, {
    timestamps: true
}
```


### Playlist

```javascript
{

    name: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    likes: Number

}
```


### Album

```javascript
{

    name: String,
    likes: Number,
    cover: String,
    genre: [{
        type: String,
        enum: ['bachata', 'alternative rock', 'hard rock', 'bossa nova', 'punk', 'blues', 'classical', 'country', 'dance', 'deep house', 'dubstep', 'techno', 'house', 'trance', 'electronic', 'hip-hop', 'rap', 'indie', 'jazz', 'flamenco', 'reggaeton', 'salsa', 'meditation', 'pop', 'progressive', 'r&b', 'soul', 'reggae', 'rock', 'metal']
    }],
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
      timestamps: true
}
```

## Authors


**[Gerardo Toledo](https://github.com/Togeri)**

**[Madalin George](https://github.com/MadalinGeorge)**

**[Julian Quiceno](https://github.com/JulianKizeno)**




