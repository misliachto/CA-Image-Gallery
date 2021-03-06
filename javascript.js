const imageArray = [
{
src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
alt: "nebula cloud",
},
{
src: "https://images.unsplash.com/photo-1570032257806-7272438f38da",
alt: "mountains reflection on water",
},
{
src: "https://images.unsplash.com/photo-1525054098605-8e762c017741",
alt: "strong waves"
},
{
src: "https://images.unsplash.com/photo-1562207520-19c0ebd8264f",
alt: "green mountains and blue sky",
},
{
src: "https://images.unsplash.com/photo-1617191519105-d07b98b10de6",
alt: "blue and purple galaxy",
},
{
src: "https://images.unsplash.com/photo-1441829266145-6d4bfbd38eb4",
alt: "blue wavy ocean with horizon",
},
{
src: "https://images.unsplash.com/photo-1615114814213-a245ffc79e9a",
alt: "brown and black galaxy",
},
{
src: "https://images.unsplash.com/photo-1552604660-a8c4dde15b2e",
alt: "person on clif in canyon",
},
{
src: "https://images.unsplash.com/photo-1564295644023-16f14ac50b93",
alt: "whale tale above water surface",
},
]


let imageIndex = 0

const imageSlide = document.createElement('div')//sukuriu div overlay langui
imageSlide.id = 'image-slide'
document.body.appendChild(imageSlide)

const btnNext = document.createElement('button')//sukuriu next btn el
btnNext.id = 'right' 
const btnPrev = document.createElement('button')//sukuriu prev btn el
btnPrev.id = 'left'

imageArray.forEach(function(image) {// displays images from the array
    let createImageTag = document.createElement('img')//sukuriu img elementus
    let divContainer = document.querySelector('.image-container')//issitraukiu egzistuojanti img containeri
    divContainer.appendChild(createImageTag)//idedu sugeneruotus img el. i div container
    createImageTag.src = image.src //img elementam priskiriu src
    createImageTag.alt = image.alt
})

const allImageElements = document.querySelectorAll('img')//selectinu all img el.

allImageElements.forEach(function (imageClicked, clickedIndex) {
    imageClicked.addEventListener('click', (e) => {//event'as paspaustam img el
       imageIndex = clickedIndex //index val pakeiciam i paspausto el. index val.
       imageSlide.classList.add('active')//priskiriam overlay screen active
       const img = document.createElement('img')//sukuriam nauja el
       img.src = imageClicked.src //priskiriam jam src nuo clicked img
       img.setAttribute('id', 'current-image')//priskiriam id

       imageSlide.appendChild(img)//i slide idedam nauja img
       imageSlide.appendChild(btnNext)//ir abu btn's
       imageSlide.prepend(btnPrev)
    })
})

btnNext.addEventListener('click', function(){
           imageIndex++
           if(imageIndex > allImageElements.length - 1) {
               imageIndex = 0
           }
           document.querySelector('#current-image').src = allImageElements[imageIndex].src;
        })
btnPrev.addEventListener('click', function(){
           imageIndex-- 
           if(imageIndex < 0) {
               imageIndex = allImageElements.length - 1
           }
           document.querySelector('#current-image').src = allImageElements[imageIndex].src;
        })

imageSlide.addEventListener('click', event => {//panaikinu overlay on click ir pries tai spausta img
    if (event.target !== event.currentTarget) 
    return
    imageSlide.classList.remove('active')
    document.querySelector('#current-image').remove() //panaikinu pries tai spausta img
})


