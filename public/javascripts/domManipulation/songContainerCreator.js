const songContainerCreator = (song) => {

    const songContainer = document.createElement('div')
    songContainer.classList += 'song-container'

    const songTitle = document.createElement('h3')
    songTitle.classList += 'song-title'
    songTitle.innerHTML = song.name

    const songAuthor = document.createElement('h4')
    songAuthor.classList += 'song-author'
    songAuthor.innerHTML = song.author

    const songAlbum = document.createElement('h4')
    songAlbum.classList += 'song-album'
    songAlbum.innerHTML = song.album

    const playButton = document.createElement('button')
    playButton.setAttribute('type', 'submit')
    playButton.classList.add('btn btn-dark btn-block btn-lg playButton')
    playButton.setAttribute('media', song.url)
    playButton.innerHTML = 'Play'

    songContainer.appendChild(playButton)
    songContainer.appendChild(songTitle)
    songContainer.appendChild(songAuthor)
    songContainer.appendChild(songAlbum)

    console.log('before returning')
    console.log(songContainer)
    return songContainer
}
