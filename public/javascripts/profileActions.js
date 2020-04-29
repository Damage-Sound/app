window.onload = () => {

    const navActions = document.querySelectorAll('.profile-options-navigation .nav-actions li')

    navActions.forEach(element => {
        element.addEventListener('click', event => navAction(event))
    })
}

const navAction = (event) => {
    const apiMethod = event.target.getAttribute('api')
    axios({
        method: 'get',
        url: `http://damage-sound.herokuapp.com/profile/${apiMethod}`
    })
        .then(response => profileView(apiMethod, response.data.foundPlaylists))
        .catch(error => profileView('error'))
}