const profileView = (view, data) => {

    switch (view) {
        case 'playlists':
            profilePlaylists(data)
            break
        
        case 'songs':
            data.forEach(song => {
                const container = document.querySelector('.profile-actions')
                container.appendChild(songContainerCreator(song))
            });
            break
        
        case 'error':
            // profileError()
            break
        
        default:
            break;
    }
}