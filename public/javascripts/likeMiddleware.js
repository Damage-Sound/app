const likeMiddleware = (event) => {

    const song = event.target

    const apiMethods = new APIHandler(`http://damage-sound.herokuapp.com/api/like/${song.getAttribute('songID')}`)
    
    apiMethods.getInfo()
        .then(response => {
            // let likes = song.parentNode.childNodes[3]
            // likes.innerHTML = response
            Array.from(document.querySelector('.song-container').childNodes).filter(node => node.nodeType !== Node.TEXT_NODE)[3].innerHTML = response
        })
        .catch(error => console.log(error))
}

const like = (event) => likeMiddleware(event)