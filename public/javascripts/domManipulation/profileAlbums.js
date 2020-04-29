const profileAlbums = (data) => {

    const container = document.querySelector('.profile-actions')

    data.forEach(album => {

        console.log('1')
        const albumContainer = document.createElement('div')
        albumContainer.classList += 'album-container'

        const albumCoverContainer = document.createElement('div')
        albumCoverContainer.classList += 'album-cover-container'

        const albumInfoContainer = document.createElement('div')
        albumInfoContainer.classList += 'album-info-container'

        console.log('2')

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

        console.log('3')

        const albumLikes = document.createElement('p')
        albumLikes.classList += 'album-likes'
        albumLikes.innerHTML = album.likes

        console.log('4')

        albumCoverContainer.appendChild(albumCover)

        albumInfoContainer.appendChild(albumTitle)
        albumInfoContainer.appendChild(albumGenreContainer)
        albumInfoContainer.appendChild(albumLikes)

        albumContainer.appendChild(albumCoverContainer)
        albumContainer.appendChild(albumInfoContainer)
        console.log('5')

        container.appendChild(albumContainer)
    })
}