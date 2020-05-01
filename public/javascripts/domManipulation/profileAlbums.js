const profileAlbums = (data) => {

    const container = document.querySelector('.profile-actions')
    const albumsRow = document.createElement('div')
    albumsRow.classList += 'row albums-row'

    data.forEach(album => {

        const albumContainer = document.createElement('div')
        albumContainer.classList += 'album-container col-md-3'

        const albumCoverContainer = document.createElement('div')
        albumCoverContainer.classList += 'album-cover-container'

        const albumInfoContainer = document.createElement('div')
        albumInfoContainer.classList += 'album-info-container'

        const albumCover = document.createElement('img')
        albumCover.classList += 'album-cover'
        albumCover.setAttribute('src', album.cover)

        const albumTitle = document.createElement('h2')
        albumTitle.classList += 'album-title'
        albumTitle.innerHTML = album.name

        const albumGenreContainer = document.createElement('div')
        albumGenreContainer.classList += 'album-genre-container'
        album.genre.forEach(genre => {
            const genreTopic = document.createElement('p')
            genreTopic.classList += 'album-genre'
            genreTopic.innerHTML = genre
            albumGenreContainer.appendChild(genreTopic)
        })

        const albumLikes = document.createElement('p')
        albumLikes.classList += 'album-likes'
        albumLikes.innerHTML = album.likes

        albumCoverContainer.appendChild(albumCover)

        albumInfoContainer.appendChild(albumTitle)
        albumInfoContainer.appendChild(albumGenreContainer)
        albumInfoContainer.appendChild(albumLikes)

        albumContainer.appendChild(albumCoverContainer)
        albumContainer.appendChild(albumInfoContainer)

        albumsRow.appendChild(albumContainer)
    })

    container.appendChild(albumsRow)
}