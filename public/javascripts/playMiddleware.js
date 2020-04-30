const playMiddleware = (song) => {
    axios({
        method: 'get',
        url: `http://damage-sound.herokuapp.com/api/play/${song.getAttribute('songID')}`
    })
        .then(response => console.log(response))
        .catch(err => console.log(err))
}