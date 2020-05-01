const profileView = (view, data) => {

    const container = document.querySelector('.profile-actions')
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    switch (view) {
        case 'playlists':
            profilePlaylists(data)
            break

        case 'albums':
            profileAlbums(data)
            break

        case 'songs':
            const songsRow = document.createElement('div')
            songsRow.classList += 'row albums-artist-row'
            data.forEach(song => songsRow.appendChild(songContainerCreator(song)))
            container.appendChild(songsRow)
            break

        case 'error':
            const errorMsg = document.createElement('h3')
            errorMsg.classList += 'errorMsg'
            errorMsg.innerHTML = 'Sorry, an error has occured'
            container.appendChild(errorMsg)
            break

        default:
            break;
    }
}