

const playMiddleware = (song) => {
    axios({
        method: 'get',
        url: `http://www.damage-sound.herokuapp.com/api/play/?song=${song.getAttribute('songID')}`
    })
    .then(response => console.log(response))
    .catch(err => console.log(err))
}