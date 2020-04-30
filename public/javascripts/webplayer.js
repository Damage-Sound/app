window.onload = () => {

    let songs = document.querySelectorAll('.playButton')

    songs.forEach(song => {
        song.addEventListener('click', event => play(event))
    })
}

document.querySelectorAll('form').forEach(form=>form.onsubmit = e => e.preventDefault())


const play = (event) => { 
    const player = document.querySelector('audio')
    player.src = event.target.getAttribute('media')
    console.log(player)
    likeMiddleware(event)
    //play Middleware(event.target)
    player.play()
}


