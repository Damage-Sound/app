const profileAlbums = (data) => {

    const container = document.querySelector('.profile-actions')

    data.forEach(album => {

        const albumContainer = document.createElement('div')
        albumContainer.classList += 'album-container'

        const albumTitle = document.createElement('h2')
        albumTitle.classList += 'album-title'
        albumTitle.innerHTML = album.name

        const albumLikes = document.createElement('p')
        albumLikes.classList += 'album-likes'
        albumLikes.innerHTML = album.likes

        albumContainer.appendChild(albumTitle)
        albumContainer.appendChild(albumLikes)

        container.appendChild(albumContainer)
    })
}