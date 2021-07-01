//creating new element on action
const imageWindow = document.createElement('div')
imageWindow.id = 'imageWindow'
document.body.appendChild(imageWindow)

//DOM of all image tags
const allImages = document.querySelectorAll('img')

allImages.forEach(image => {
    image.addEventListener('click', event => {
        imageWindow.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        imageWindow.appendChild(img)
    })
})
