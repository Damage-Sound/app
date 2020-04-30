const play = (event) => {
    const player = document.querySelector('audio')
    player.src = event.target.getAttribute('media')
    playMiddleware(event.target)
    player.play()
}


