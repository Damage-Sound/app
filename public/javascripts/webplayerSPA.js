const play = (event) => { 
    const player = document.querySelector('audio')
    player.src = event.target.getAttribute('media')
    console.log(player)
    player.play()
}