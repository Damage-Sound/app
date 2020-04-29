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
        .then(response => {
            console.log('de profileActions a profileView')
            console.log('method: ', apiMethod)
            console.log('data: ', response.data)
            profileView(apiMethod, response.data)
        })
        .catch(error => profileView('error'))
}