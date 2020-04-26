const express = require("express")
const router = express.Router()
const passport = require("passport")
const axios = require('axios')

router.get('/', (req, res) => res.render("location"))

router.post('/', (req, res, next) => {
    //axiosLocation.post('/')
    axios({
        method: 'post',
        url: `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.GOOGLEMAPSAPIKEY}`
    })
    .then(location => location.data.location)
    .then(coordinates => {
        console.log('hola',coordinates)
        return axios({
            method: 'post',
            url: `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=${process.env.GOOGLEMAPSAPIKEY}`
        })
    })
    .then(response => console.log('Esto es el pais', response.data.results[response.data.results.length-2].address_components[0].long_name))
    .catch(err => console.log(err))
    
})

module.exports = router