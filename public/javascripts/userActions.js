window.onload = () => {

    let playButtons = document.querySelectorAll('.playButton')

    playButtons.forEach(song => {
        song.addEventListener('click', event => play(event))
    })

    let likeButtons = document.querySelectorAll('.likeButton')

    likeButtons.forEach(song => {
        song.addEventListener('click', event => like(event))
    })
}