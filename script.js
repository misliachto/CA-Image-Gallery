//creating new element on action
const imageWindow = document.createElement('div')
imageWindow.id = 'imageWindow'
document.body.appendChild(imageWindow)


//DOM of all image tags
const allImages = document.querySelectorAll('img')

//
allImages.forEach(image => {
    image.addEventListener('click', () => {
        imageWindow.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while(imageWindow.firstChild) {
            imageWindow.removeChild(imageWindow.firstChild)
        }
        imageWindow.appendChild(img)
        
        let btnNext = document.createElement('img')
        btnNext.setAttribute('src', '/next.png')
        btnNext.setAttribute('id', 'right')
        btnNext.setAttribute('onclick', 'changeImg(1)')
        imageWindow.appendChild(btnNext)

        let btnPrev = document.createElement('img')
        btnPrev.setAttribute('src', '/prev.png')
        btnPrev.setAttribute('id', 'left')
        btnPrev.setAttribute('onclick', 'changeImg(0)')
        imageWindow.prepend(btnPrev)
    })
    
})
function changeImg(changeDir) {
    if(changeDir === 1) {
        console.log('NEXT button is working')
    } else if(changeDir === 0) {
        console.log('PREVIUOUS button is working')
    }
}

//removes background screen by removing it's class onclick
imageWindow.addEventListener('click', event => {
    if (event.target !== event.currentTarget) 
    return
    imageWindow.classList.remove('active')
})
