class APIHandler {
    constructor(baseUrl) {
        this.BASE_URL = baseUrl;
        this.axiosAPI = axios.create({ baseUrl: baseUrl })
    }

    getInfo() {
        return this.axiosAPI.get(this.BASE_URL)
            .then(result => result.data)
            .catch(error => console.log(error))
    }
}