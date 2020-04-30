class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
        this.axiosAPI = axios.create({ baseUrl: baseUrl })
    }

    getLikes() {
        return this.axiosAPI.get(this.BASE_URL)
            .then(result => result.data)
            .catch(error => console.log(error))
    }

}

const apiMethods = new APIHandler(`http://www.damage-sound.herokuapp.com/api/like/${song.getAttribute('songID')}`)

apiMethods.getLikes()
    .then(response => console.log(response.data))
    .catch(error => console.log(error))



// const likeMiddleware = (song) => {
//     axios({
//         method: 'get',
//         url: `http://www.damage-sound.herokuapp.com/api/like/${song.getAttribute('songID')}`
//     })
//         .then(response => console.log(response))
//         .catch(err => console.log(err))
// }

const likeMiddleware = (song) => {
    apiMethods.getLikes()
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
}




const like = (event) => likeMiddleware(event.target)