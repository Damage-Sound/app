const profileView = (view, data) => {

    switch (view) {
        case 'playlists':
            profilePlaylists(data)
            break
        
        case 'songs':
            console.log("ENTRANDO")
            data.forEach(song => {
                const container = document.querySelector('.profile-actions')
                console.log(container)
                console.log('after returning', songContainerCreator(song))
            })
            break
        
        case 'error':
            // profileError()
            break
        
        default:
            break;
    }
}