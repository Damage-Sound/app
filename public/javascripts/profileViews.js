const profileView = (view, data) => {

    switch (view) {
        case 'playlists':
            profilePlaylists(data)
            break
    
        default:
            break;
    }
}