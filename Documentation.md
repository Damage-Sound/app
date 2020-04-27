USOS DE APIs:

```js
// GOOGLE API EXAMPLE

const userLatitude, userLongitude
const googleGeoLocURL = `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.GOOGLEMAPSAPIKEY}`

router.post('/', (req, res, next) => { //post de ejemplo
    userInfo = post(googleGeoLocURL) // ???? Cómo hacemos un "post dentro de un post"?
    userLatitude = userInfo.location.lat
    userLongitude = userInfo.location.lng
    const googleGeoLocCountryParserURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${userLatitude},${userLongitude}&key=${process.env.GOOGLEMAPSAPIKEY}`
    const userInfoParsed = post(googleGeoLocCountryParserURL) /// ?????
    return userInfoParsed[5]["long_name"]
    
})



// -------------------------------

//     Ejemplos Testeados en Postman: 

 `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.GOOGLEMAPSAPIKEY}` // GEOLOC Coordinates

`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.4717568,-3.35872&key=${process.env.GOOGLEMAPSAPIKEY}`  //GEOLOC Country Name Parser
```


