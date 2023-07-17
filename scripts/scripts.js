const leftButtons = document.querySelectorAll('.left-button')
const rightButtons = document.querySelectorAll('.right-button')
const sectionHeaders = document.querySelectorAll('.section-header')
const projectHeaders = document.querySelectorAll('.project-header')

leftButtons.forEach( function (leftButton) {
    leftButton.addEventListener('click', leftButtonClicked)
})

rightButtons.forEach( function (rightButton) {
    rightButton.addEventListener('click', rightButtonClicked)
})

sectionHeaders.forEach( function (sectionHeader) {
    sectionHeader.addEventListener('click', toggleSection)
})

projectHeaders.forEach(function (projectHeader) {
    projectHeader.addEventListener('click', toggleProject)
})

function leftButtonClicked(e) {
    let leftButton = e.target
    let carousel = leftButton.parentElement.parentElement
    let carouselImages = carousel.querySelectorAll('.carousel-image')
    let indicators = carousel.querySelectorAll('.indicator')

    if (parseInt(carousel.dataset.currentPic) > 1) {
        carousel.dataset.currentPic = (parseInt(carousel.dataset.currentPic) - 1).toString()
    } else {
        carousel.dataset.currentPic = carousel.dataset.size
    }

    leftButton.classList.add('clicked')

    for (i = 0; i < parseInt(carousel.dataset.size); i++) {
        if (parseInt(carousel.dataset.currentPic) === parseInt(carouselImages[i].dataset.picId)) {
            carouselImages[i].classList.add('selected')
        } else {
            carouselImages[i].classList.remove('selected')
        }
        if (parseInt(carousel.dataset.currentPic) === parseInt(indicators[i].dataset.indicatorId)) {
            indicators[i].classList.add('selected')
        } else {
            indicators[i].classList.remove('selected')
        }
    }
    window.setTimeout(function () {leftButton.classList.remove('clicked')}, 200)
}

function rightButtonClicked(e) {
    let rightButton = e.target
    let carousel = rightButton.parentElement.parentElement
    let carouselImages = carousel.querySelectorAll('.carousel-image')
    let indicators = carousel.querySelectorAll('.indicator')

    if (parseInt(carousel.dataset.currentPic) < parseInt(carousel.dataset.size)) {
        carousel.dataset.currentPic = (parseInt(carousel.dataset.currentPic) + 1).toString()
    } else {
        carousel.dataset.currentPic = "1"
    }

    rightButton.classList.add('clicked')

    for (i = 0; i < parseInt(carousel.dataset.size); i++) {
        if (parseInt(carousel.dataset.currentPic) === parseInt(carouselImages[i].dataset.picId)) {
            carouselImages[i].classList.add('selected')
        } else {
            carouselImages[i].classList.remove('selected')
        }
        if (parseInt(carousel.dataset.currentPic) === parseInt(indicators[i].dataset.indicatorId)) {
            indicators[i].classList.add('selected')
        } else {
            indicators[i].classList.remove('selected')
        }
    }
    window.setTimeout(function () {rightButton.classList.remove('clicked')}, 200)
}

function toggleSection (e) {
    e.target.classList.toggle('clicked')
    let section = e.target.parentElement
    console.log(section)
    let content = section.querySelector('.content')
    console.log(content)
    // content.classList.toggle('hidden')
    content.classList.toggle('collapse')
}

function toggleProject (e) {
    e.target.classList.toggle('clicked')
    let project = e.target.parentElement
    content.classList.toggle('selected')
}
