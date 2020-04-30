const likeMiddleware = (event) => {

    const song = event.target

    const apiMethods = new APIHandler(`http://damage-sound.herokuapp.com/api/like/${song.getAttribute('songID')}`)
    
    apiMethods.getInfo()
        .then(response => {
            let likes = song.parentNode.childNodes[2]
            likes.innerHTML = response
        })
        .catch(error => console.log(error))
}

const like = (event) => likeMiddleware(event)