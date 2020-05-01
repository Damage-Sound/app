window.onload = () => {

    console.log('windows loaded')

    let alertButton = document.querySelector('#upload-song-button')

    alertButton.addEventListener('click', event => helloFunction())    
}

const helloFunction = () => console.log('button clicked')
