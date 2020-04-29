const profilePlaylists = (data) => {

    const container = document.querySelector('.profile-actions')

    data.forEach(playlist => {
        playlist.songs.forEach(song => {

            const playlistContainer = document.createElement('div')
            playlistContainer.classList += 'playlist-container'
            
            const playlistTitle = document.createElement('h3')
            playlistTitle.classList += 'playlist-title'
            playlistTitle.innerHTML = playlist.name

            const playlistLikes = document.createElement('p')
            playlistLikes.classList += 'playlist-likes'
            playlistLikes.innerHTML = playlist.likes

            const playlistPlays = document.createElement('p')
            playlistPlays.classList += 'playlist-plays'
            playlistPlays.innerHTML = playlist.plays.total

            playlistContainer.appendChild(songContainerCreator(song))
            container.appendChild(playListContainer)
        })
    });
}

