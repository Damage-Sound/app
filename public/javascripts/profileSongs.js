const profileSongs = (data) => {

    const container = document.querySelector('.profile-actions')

    data.forEach(song => container.appendChild(songContainerCreator(song)))
}

