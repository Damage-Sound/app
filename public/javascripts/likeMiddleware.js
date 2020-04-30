const likeMiddleware = (event) => {

    const song = event.target

    const apiMethods = new APIHandler(`http://damage-sound.herokuapp.com/api/like/${song.getAttribute('songID')}`)

    apiMethods.getInfo()
        .then(response => Array.from(song.parentNode.childNodes).filter(node => node.className === 'song-likes')[0].innerHTML = response)
        .catch(error => console.log(error))
}

const like = (event) => likeMiddleware(event)