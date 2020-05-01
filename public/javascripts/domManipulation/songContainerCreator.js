const songContainerCreator = (song) => {

    const songContainer = document.createElement('div')
    songContainer.classList += 'song-container col-md-3'

    const songCover = document.createElement('img')
    songCover.classList += 'song-cover'
    songCover.src = song.cover

    const songTitle = document.createElement('h3')
    songTitle.classList += 'song-title'
    songTitle.innerHTML = song.name

    const songPlays = document.createElement('p')
    songPlays.classList += 'song-plays'
    songPlays.innerHTML = `${song.plays.total} <img class="flaticon-img play-img" src="/images/play.svg" alt="like">`

    const songLikes = document.createElement('p')
    songLikes.classList += 'song-likes'
    songLikes.innerHTML = `${song.likes} <img class="flaticon-img" src="/images/heart2.svg" alt="like">`

    const playButton = document.createElement('button')
    playButton.setAttribute('type', 'submit')
    playButton.classList.add('play-button-like', 'playButton')
    playButton.setAttribute('media', song.url)
    playButton.setAttribute('songID', song._id)
    playButton.innerHTML = 'Play'
    playButton.addEventListener('click', event => play(event))

    const likeButton = document.createElement('button')
    likeButton.setAttribute('type', 'submit')
    likeButton.classList.add('play-button-like', 'likeButton')
    likeButton.setAttribute('media', song.url)
    likeButton.setAttribute('songID', song._id)
    likeButton.innerHTML = 'Like'
    likeButton.addEventListener('click', event => like(event))

    songContainer.appendChild(songCover)
    songContainer.appendChild(songTitle)
    songContainer.appendChild(songPlays)
    songContainer.appendChild(songLikes)
    songContainer.appendChild(playButton)
    songContainer.appendChild(likeButton)

    return songContainer
}
