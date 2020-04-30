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

const likeMiddleware = (event) => {

    const song = event.target

    const apiMethods = new APIHandler(`http://damage-sound.herokuapp.com/api/like/${song.getAttribute('songID')}`)
    
    apiMethods.getLikes()
        .then(response => {
            let likes = song.parentNode.childNodes[2]
            likes.innerHTML = response
        })
        .catch(error => console.log(error))
}

const like = (event) => likeMiddleware(event)