const profileView = (view, data) => {

    switch (view) {
        case 'playlists':
            profilePlaylists(data)
            break
        
        
        case 'error':
            // profileError()
            break
        
        default:
            break;
    }
}