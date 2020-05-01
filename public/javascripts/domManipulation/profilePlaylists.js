const profilePlaylists = (data) => {

    const container = document.querySelector('.profile-actions')

    data.forEach(playlist => {

        const playlistContainer = document.createElement('div')
        playlistContainer.classList += 'playlist-container'

        const playlistTitle = document.createElement('h2')
        playlistTitle.classList += 'playlist-title'
        playlistTitle.innerHTML = playlist.name

        const playlistLikes = document.createElement('p')
        playlistLikes.classList += 'playlist-likes'
        playlistLikes.innerHTML = playlist.likes

        playlistContainer.appendChild(playlistTitle)
        playlistContainer.appendChild(playlistLikes)

        
        const linkToPlaylist = document.createElement('a')
        linkToPlaylist.classList += 'playlist-link'
        linkToPlaylist.setAttribute('href', `http://damage-sound.herokuapp.com/playlist/${playlist._id}`)
        
        linkToPlaylist.appendChild(playlistContainer)
        container.appendChild(linkToPlaylist)

    })
}

