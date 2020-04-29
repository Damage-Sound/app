const songContainerCreator = (song) => {

    const songContainer = document.createElement('div')
    songContainer.classList += 'song-container'

    const songTitle = document.createElement('h3')
    songTitle.classList += 'song-title'
    songTitle.innerHTML = song.name

    const songPlays = document.createElement('p')
    songPlays.classList += 'song-plays'
    songPlays.innerHTML = song.plays.total

    const songLikes = document.createElement('p')
    songLikes.classList += 'song-likes'
    songLikes.innerHTML = song.likes
    
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

    const playButton = document.createElement('button')
    playButton.setAttribute('type', 'submit')
    playButton.classList.add('btn', 'btn-dark', 'btn-block', 'btn-lg', 'playButton')
    playButton.setAttribute('media', song.url)
    playButton.innerHTML = 'Play'
    playButton.addEventListener('click', event => play(event))

    songContainer.appendChild(playButton)
    songContainer.appendChild(songTitle)

    //songContainer.appendChild(songAlbum)

    return songContainer
}
