let parallaxElements = document.querySelectorAll('.parallax'),
    speedVertical = 0,
    speedHorizontal = 0

document.addEventListener('scroll', apply2DEffects)

function apply2DEffects() {

    parallaxElements.forEach(function(element) {

        if (element.dataset.direction === 'horizontal') {

            speedHorizontal = element.dataset.speed * element.getBoundingClientRect().top

        } else {
            speedHorizontal = 0
        }


        if (element.dataset.direction === 'vertical') {

            speedVertical = element.dataset.speed * element.getBoundingClientRect().top

        } else {
            speedVertical = 0
        }

        element.style.transform = `translate(${speedHorizontal}px, ${speedVertical}px)`

    })


}