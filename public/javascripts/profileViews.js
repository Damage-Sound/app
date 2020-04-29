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
            data.forEach(song => container.appendChild(songContainerCreator(song)))
            break

        case 'error':
            // profileError()
            break

        default:
            break;
    }
}