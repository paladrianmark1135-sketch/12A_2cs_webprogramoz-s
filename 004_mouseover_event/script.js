const demo = document.querySelector('#demo')
let isImgDisplayed = false;
demo.addEventListener('mouseover', displayImg)
demo.addEventListener('mouseout', removeImg)
function displayImg(event){
    if (!isImgDisplayed && event.target === demo) {
        const img = document.createElement('img')
        img.src = './img/kep.jpg'
        img.src = 'elegtelen'

        demo.replaceChildren(img)
        isImgDisplayed = true
    }
}

function removeImg(event) {
    if (!isImgDisplayed && event.target === demo) {
        const p = document.createElement('p')
        p.textContent = 'Hanyasra ertekelek?'

        demo.replaceChildren(p)
        isImgDisplayed = false
    }
}