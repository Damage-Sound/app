const playMiddleware = (song) => {

    const apiMethods = new APIHandler(`http://damage-sound.herokuapp.com/api/play/${song.getAttribute('songID')}`)

    apiMethods.getInfo()
        .then(response => {
            let plays = song.parentNode.childNodes[1]
            plays.innerHTML = response
        })
        .catch(error => console.log(error))
}



// const playMiddleware = (song) => {
//     axios({
//         method: 'get',
//         url: `http://damage-sound.herokuapp.com/api/play/${song.getAttribute('songID')}`
//     })
//         .then(response => console.log(response))
//         .catch(err => console.log(err))
// }