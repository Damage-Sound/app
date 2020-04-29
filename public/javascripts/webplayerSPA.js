const play = (event) => { 
    const player = document.querySelector('audio')
    player.src = event.target.getAttribute('media')
    player.play()
}