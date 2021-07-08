let imageArray = ['/2.jpg','/3.jpg','/4.jpg','/5.jpg','/6.jpg','/7.jpg','/8.jpg','/9.jpg'];
let imageIndex = 1;

const imageWindow = document.createElement('div')
imageWindow.id = 'imageWindow'
document.body.appendChild(imageWindow)

imageArray.forEach(function(image) { 
  let img = document.createElement('img'); // create an img element
  img.src = image;                         // set its src to the link l
  document.body.appendChild(img);         // append it to the body
});

const allImages = document.querySelectorAll('img')

allImages.forEach(imageSelected => {
    imageSelected.addEventListener('click', () => {
        imageWindow.classList.add('active')
        const imgClicked = document.createElement('img')
        imgClicked.src = imageSelected.src

        while(imageWindow.firstChild) {
            imageWindow.removeChild(imageWindow.firstChild) //panaikinu pries tai buvusi image
        }
        imageWindow.appendChild(imgClicked)

        let btnNext = document.createElement('img')
        btnNext.setAttribute('src', '/next.png')
        btnNext.setAttribute('id', 'right')
        btnNext.addEventListener('click', ()=>{
            imageIndex++;
            document.getElementById('main-image').src = imageArray[imageIndex];
        })
        imageWindow.appendChild(btnNext)

        let btnPrev = document.createElement('img')
        btnPrev.setAttribute('src', '/prev.png')
        btnPrev.setAttribute('id', 'left')
        btnPrev.setAttribute('onclick', 'changeImg(0)')
        imageWindow.prepend(btnPrev)
        
    })
})

imageWindow.addEventListener('click', event => {//panaikinu overlay on click
    if (event.target !== event.currentTarget) 
    return
    imageWindow.classList.remove('active')
})



