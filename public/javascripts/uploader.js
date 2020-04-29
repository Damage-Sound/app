// const cloudinaryMusicUploader = require('../../configs/cloudinaryMusic.config')
import {cloudinaryMusicUploader} from '../javascripts/cloudinaryMusic.config'

window.onload = () => {

    console.log('windows loaded')

    let alertButton = document.querySelector('#upload-song-button')

    alertButton.addEventListener('click', event => helloFunction())    
}

const helloFunction = () => console.log('button clicked')
