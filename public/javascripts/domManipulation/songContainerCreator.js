const songContainerCreator = (song) => {
    console.log('CREATING SONG')

    const songContainer = document.createElement('div')
    songContainer.classList += 'song-container'
    console.log('CONTAINER CREATED')
    console.log(songContainer)

    const songTitle = document.createElement('h3')
    songTitle.classList += 'song-title'
    songTitle.innerHTML = song.name
    console.log('TITLE CREATED')
    console.log(songTitle)

    // const songAuthor = document.createElement('h4')
    // songAuthor.classList += 'song-author'
    // songAuthor.innerHTML = song.author
    // console.log('Author CREATED')
    // console.log(songAuthor)

    // const songAlbum = document.createElement('h4')
    // songAlbum.classList += 'song-album'
    // songAlbum.innerHTML = song.album
    // console.log('Album CREATED')
    // console.log(songAlbum)

    console.log('This executes')
    const playButton = document.createElement('button')
    playButton.setAttribute('type', 'submit')
    playButton.classList.add('btn', 'btn-dark', 'btn-block', 'btn-lg', 'playButton')
    playButton.setAttribute('media', song.url)
    playButton.innerHTML = 'Play'
    console.log('Button CREATED')
    console.log(playButton)

    songContainer.appendChild(playButton)
    songContainer.appendChild(songTitle)
    songContainer.appendChild(songAuthor)
    songContainer.appendChild(songAlbum)

    console.log('before returning')
    console.log(songContainer)
    return songContainer
}
