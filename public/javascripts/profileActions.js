window.onload = () => {

    const navActions = document.querySelectorAll('.profile-options-navigation .nav-actions li')

    navActions.forEach(element => {
        element.addEventListener('click', event => navAction(event))
    })

    const uploadSong = document.querySelector('#upload-song-button')
    uploadSong.addEventListener('click', event => loadSongView(event))
}

const navAction = (event) => {
    const apiMethod = event.target.getAttribute('api')
    axios({
        method: 'get',
        url: `http://damage-sound.herokuapp.com/profile/${apiMethod}`
    })
        .then(response => {
            console.log(response.data)
            profileView(apiMethod, response.data)
        })
        .catch(error => profileView('error'))
}



const loadSongView = (event) => {

    const genres = ['bachata', 'alternative rock', 'hard rock', 'bossa nova', 'punk', 'blues', 'classical', 'country', 'dance', 'deep house', 'dubstep', 'techno', 'house', 'trance', 'electronic', 'hip-hop', 'rap', 'indie', 'jazz', 'flamenco', 'reggaeton', 'salsa', 'meditation', 'pop', 'progressive', 'r&b', 'soul', 'reggae', 'rock', 'metal']


    const container = document.querySelector('.profile-actions')
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    const formRow = document.createElement('div')
    formRow.classList += 'row justify-content-center'

    const formContainer = document.createElement('div')
    formContainer.classList += 'form-container col-md-8'

    const uploadSongForm = document.createElement('form')
    uploadSongForm.classList += 'upload-song-form row flex-column'
    uploadSongForm.setAttribute('method', 'POST')
    uploadSongForm.setAttribute('action', 'profile/upload/song')
    uploadSongForm.setAttribute('enctype', 'multipart/form-data')

    const formFieldsContainer = document.createElement('div')
    formFieldsContainer.classList += 'form-group'

    const songFileLabel = document.createElement('label')
    songFileLabel.innerHTML = 'Choose Your Song File'
    songFileLabel.setAttribute('for', 'songFile')

    const songNameLabel = document.createElement('label')
    songNameLabel.innerHTML = 'Write Your Song Name'
    songNameLabel.setAttribute('for', 'songName')

    const songNameInput = document.createElement('input')
    songNameInput.classList += 'form-control-file'
    songNameInput.setAttribute('type', 'text')
    songNameInput.setAttribute('id', 'songName')
    songNameInput.setAttribute('name', 'songName')

    const songCoverLabel = document.createElement('label')
    songCoverLabel.innerHTML = 'Choose Your Song Cover'
    songCoverLabel.setAttribute('for', 'songCover')

    const songGenreLabel = document.createElement('label')
    songGenreLabel.innerHTML = 'Choose Your Song Genre'
    songGenreLabel.setAttribute('for', 'songGenre')

    const songFileInput = document.createElement('input')
    songFileInput.classList += 'form-control-file'
    songFileInput.setAttribute('type', 'file')
    songFileInput.setAttribute('id', 'songFile')
    songFileInput.setAttribute('name', 'songFile')

    const songGenreSelect = document.createElement('select')
    songGenreSelect.classList += 'form-control'
    songGenreSelect.setAttribute('type', 'select')
    songGenreSelect.setAttribute('id', 'songGenre')
    songGenreSelect.setAttribute('name', 'songGenre')

    genres.forEach(genre => {

        const genreOption = document.createElement('option')
        genreOption.setAttribute('value', genre)
        genreOption.innerHTML = genre
        songGenreSelect.appendChild(genreOption)
    })

    const songFileButton = document.createElement('button')
    songFileButton.classList += 'btn play-button-like'
    songFileButton.innerHTML = 'Upload Song'
    songFileButton.setAttribute('type', 'submit')
    songFileButton.addEventListener('click', event => loadingMessage(event))

    const songFileCover = document.createElement('input')
    songFileCover.classList += 'form-control-file'
    songFileCover.setAttribute('type', 'file')
    songFileCover.setAttribute('id', 'songCover')
    songFileCover.setAttribute('name', 'songCover')

    formFieldsContainer.appendChild(songFileLabel)
    formFieldsContainer.appendChild(songFileInput)
    formFieldsContainer.appendChild(songNameLabel)
    formFieldsContainer.appendChild(songNameInput)
    formFieldsContainer.appendChild(songGenreLabel)
    formFieldsContainer.appendChild(songGenreSelect)

    uploadSongForm.appendChild(formFieldsContainer)
    uploadSongForm.appendChild(songFileButton)

    formContainer.appendChild(uploadSongForm)
    formRow.appendChild(formContainer)
    container.appendChild(formRow)
}


const loadingMessage = event => {

    const form = document.querySelector('.upload-song-form')

    const loadingMessage = document.createElement('p')
    loadingMessage.classList += 'approvedMsg'
    loadingMessage.innerHTML += 'Please, wait until the song is uploaded, please, do not reload the page...'

    form.appendChild(loadingMessage)
}