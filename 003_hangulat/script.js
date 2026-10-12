const slider = document.querySelector('#csuszka')
slider.addEventListener('input', mood)
function mood() {

    const sliderValue = Number(slider.value) = 1
    const img = document.querySelector('#kep')

    img.src = './img/${sliderValue}.png'

}