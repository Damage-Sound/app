const playMiddleware = (song) => {

    const apiMethods = new APIHandler(`http://damage-sound.herokuapp.com/api/play/${song.getAttribute('songID')}`)


    apiMethods.getInfo()
        .then(response => {
            // let plays = song.parentNode.childNodes[2]
            // plays.innerHTML = response
            Array.from(document.querySelector('.song-container').childNodes).filter(node => node.nodeType !== Node.TEXT_NODE)[2].innerHTML = response
        })
        .catch(error => console.log(error))
}