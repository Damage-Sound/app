
const like = (event) => likeMiddleware(event.target)

const likeMiddleware = (song) => {
    axios({
        method: 'get',
        url: `http://www.damage-sound.herokuapp.com/api/like/${song.getAttribute('songID')}`
    })
        .then(response => console.log(response))
        .catch(err => console.log(err))
}