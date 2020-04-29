const profilePlaylists = (data) => {

    const container = document.querySelector('.profile-actions')
    console.log('entra en profilePlatlists function con esta data:')
    console.log(data);

    data.forEach(playlist => {
        console.log('para esta playlist:')
        console.log(playlist);

        const playlistContainer = document.createElement('div')
        playlistContainer.classList += 'playlist-container'

        const playlistTitle = document.createElement('h2')
        playlistTitle.classList += 'playlist-title'
        playlistTitle.innerHTML = playlist.name

        const playlistLikes = document.createElement('p')
        playlistLikes.classList += 'playlist-likes'
        playlistLikes.innerHTML = playlist.likes

        const playlistPlays = document.createElement('p')
        playlistPlays.classList += 'playlist-plays'
        playlistPlays.innerHTML = playlist.plays.total

        playlistContainer.appendChild(playlistTitle)
        playlistContainer.appendChild(playlistLikes)
        playlistContainer.appendChild(playlistPlays)

        console.log('se va a meter esto:')
        console.log(playListContainer)
        console.log('en esto esto:')
        console.log(container)

        container.appendChild(playListContainer)


        // const divPlaylistInfo = document.createElement('div')
        // divPlaylistInfo.classList += 'playlist-info'

        // const divPlaylistSongs = document.createElement('div')
        // divPlaylistSongs.classList += 'playlist-songs'

        // const playlistTitle = document.createElement('h2')
        // playlistTitle.classList += 'playlist-title'
        // playlistTitle.innerHTML = playlist.name

        // const playlistLikes = document.createElement('p')
        // playlistLikes.classList += 'playlist-likes'
        // playlistLikes.innerHTML = playlist.likes

        // const playlistPlays = document.createElement('p')
        // playlistPlays.classList += 'playlist-plays'
        // playlistPlays.innerHTML = playlist.plays.total

        // divPlaylistInfo.appendChild(playlistTitle)
        // divPlaylistInfo.appendChild(playlistLikes)
        // divPlaylistInfo.appendChild(playlistPlays)

        // playlistContainer.appendChild(divPlaylistInfo)

        // playlist.songs.forEach(song => {

        //     console.log('para esta cancion');
        //     console.log(song);

        //     playlistContainer.appendChild(songContainerCreator(song))
        //     container.appendChild(playListContainer)
        // })
    });
}

