const profileView = (view, data) => {

    switch (view) {
        case 'playlists':
            profilePlaylists(data)
            break
        
        case 'songs':
            const container = document.querySelector('.profile-actions')
            while (container.firstChild) {
                container.removeChild(container.firstChild)
            }
            data.forEach(song => container.appendChild(songContainerCreator(song)))
            break
        
        case 'error':
            // profileError()
            break
        
        default:
            break;
    }
}