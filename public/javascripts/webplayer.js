window.onload = () => {

    let songs = document.querySelectorAll('.playButton')

    songs.forEach(song => {
        song.addEventListener('click', event => play(event))
    })
}


const play = (event) => { 
    const player = document.querySelector('audio')
    player.src = event.target.getAttribute('media')
    console.log(player)
    playMiddleware(event.target)
    player.play()
}

const like = (event) => likeMiddleware(event.target)

