const sliderImgs = [1,2,3,4,5]
let sliderPos = 0;
const nextImg = document.querySelector('#next-img')
const prevImg = document.querySelector('#prev-img')

const hero = document.querySelector('.hero')
nextImg.addEventListener('click', () => {
  sliderPos === 4 ? sliderPos = 0 : sliderPos++
  hero.style.backgroundImage = `url('img/sliders/${sliderImgs[sliderPos]}.jpg')`
})

prevImg.addEventListener('click', () => {
  sliderPos === 0 ? sliderPos = 4 : sliderPos--
  hero.style.backgroundImage = `url('img/sliders/${sliderImgs[sliderPos]}.jpg')`
})