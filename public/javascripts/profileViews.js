const profileView = (view, data) => {

    switch (view) {
        case 'playlists':
            console.log('de profileViews a profilePlaylists')
            console.log('view: ', view)
            console.log('data: ', data)
            profilePlaylists(data)
            break
        
        
        case 'error':
            // profileError()
            break
        
        default:
            break;
    }
}