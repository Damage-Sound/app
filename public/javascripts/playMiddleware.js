class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
        this.axiosAPI = axios.create({ baseUrl: baseUrl })
    }

    getPlays() {
        return this.axiosAPI.get(this.BASE_URL)
            .then(result => result.data)
            .catch(error => console.log(error))
    }
}



const playMiddleware = (song) => {
    
    const song = event.target

    const apiMethods = new APIHandler(`http://damage-sound.herokuapp.com/api/play/${song.getAttribute('songID')}`)

    apiMethods.getPlays()
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error))
}



// const playMiddleware = (song) => {
//     axios({
//         method: 'get',
//         url: `http://damage-sound.herokuapp.com/api/play/${song.getAttribute('songID')}`
//     })
//         .then(response => console.log(response))
//         .catch(err => console.log(err))
// }