axios({
    method: 'post',
    url: `http://damage-sound.herokuapp.com/locate/`
})
    .then(response => console.log('-------------------------------------------- everything is fine', response))
    .catch(error => console.log('error locating user', error))