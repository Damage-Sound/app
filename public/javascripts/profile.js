window.onload = () => {

    const navActions = document.querySelectorAll('.profile-options-navigation .nav-actions li')

    navActions.forEach(element => {
        element.addEventListener('click', event => navAction(event))
    })
}

// Esto va a haber que hacerlo en métodos, con un archivo separado, como en el ejemplo de Germán
//links: 
// https://github.com/Togeri/lab-ajax-crud-characters/blob/master/public/javascript/APIHandler.js
//https://github.com/Togeri/lab-ajax-crud-characters/blob/master/public/javascript/index.js

const navAction = (event) => {
    const apiMethod = event.target.getAttribute('api')
    console.log("hola")
    axios({
        method: 'get',
        url: `localhost:3000/profile/api-request/${apiMethod}`
    })
        .then(response => console.log(response))
        .catch(error => console.log(error)) 

}