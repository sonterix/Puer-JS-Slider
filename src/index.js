import './styles/index.scss'

// Side settings data
const config = {
  loop: false,
  arrows: true,
  dots: false,
  transitionSpeed: 400
}
const images = [
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
  'https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg',
  'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg',
  'https://cdn.pixabay.com/photo/2018/07/12/11/45/sunrise-3533173__340.jpg',
  'https://www.wasaweb.net/images/stock-images/851x315/xLondon-228.jpg.pagespeed.ic.E1pi6Mnw7T.jpg'
]

// Main DOM variables
const slider = document.querySelector('#slider')

// Handle to disable button during an animation
const handleControlActions = (status = false) => {
  // Array of elements to disable during an animation
  const actions = [slider.querySelector('.nick-next-btn'), slider.querySelector('.nick-prev-btn')]

  // Adding 'disable' class to each element from the array
  actions.forEach(action => (!status ? action.classList.add('disabled') : action.classList.remove('disabled')))
}

// Handle to create slide elements base on array of images
const handleCreateSlides = images => {
  // Wrapper for slider
  const wrapper = document.createElement('div')
  wrapper.classList.add('nick-slider')
  // Add transition for an slide animation
  wrapper.style.transition = `left ${config.transitionSpeed}ms ease`

  // Generate slides
  const slides = images.forEach(image => {
    const slide = document.createElement('div')
    slide.classList.add('nick-slide')
    slide.setAttribute('style', `background-image: url(${image})`)

    // Add slide to wraooer
    wrapper.appendChild(slide)
  })

  return wrapper
}

// Handle to create controls for slider
const handleCreateControls = () => {
  const nextButton = document.createElement('button')
  const prevButton = document.createElement('button')

  // Add type
  nextButton.setAttribute('type', 'button')
  prevButton.setAttribute('type', 'button')

  // Add classes
  nextButton.classList.add('nick-next-btn')
  prevButton.classList.add('nick-prev-btn')

  // Add controls
  nextButton.innerHTML = '⯈'
  prevButton.innerHTML = '⯇'

  return [nextButton, prevButton]
}

// Handle to create next slide button
const handleNextSlide = () => {
  // Disable actions to prevent new action before animationg ends
  handleControlActions()

  // Get slider wrrapper and left value of the wrapper. Left value conver to number
  const sliderWrapper = slider.querySelector('.nick-slider')
  const sliderWrapperLeft = +getComputedStyle(sliderWrapper).left.replace('px', '')

  // Get current active and next active slides
  const activeSlide = slider.querySelector('.nick-slider .nick-slide.active')
  const nextAfterActive = activeSlide.nextSibling

  // Move to next slide
  sliderWrapper.style.left = nextAfterActive
    ? `${sliderWrapperLeft - nextAfterActive.scrollWidth}px`
    : `${sliderWrapperLeft}px`

  // Replace active class
  nextAfterActive && activeSlide.classList.remove('active')
  nextAfterActive && nextAfterActive.classList.add('active')

  // Enable actions
  setTimeout(() => handleControlActions(true), config.transitionSpeed)
}

// Handle to create prev slide button
const handlePrevSlide = () => {
  // Disable actions to prevent new action before animationg ends
  handleControlActions()

  // Get slider wrrapper and left value of the wrapper. Left value conver to number
  const sliderWrapper = slider.querySelector('.nick-slider')
  const sliderWrapperLeft = +getComputedStyle(sliderWrapper).left.replace('px', '')

  // Get current active and next active slides
  const activeSlide = slider.querySelector('.nick-slider .nick-slide.active')
  const prevAfterActive = activeSlide.previousSibling

  // Move to next slide
  sliderWrapper.style.left = prevAfterActive ? `${sliderWrapperLeft + prevAfterActive.scrollWidth}px` : 0

  // Replace active class
  prevAfterActive && activeSlide.classList.remove('active')
  prevAfterActive && prevAfterActive.classList.add('active')

  // Enable actions
  setTimeout(() => handleControlActions(true), config.transitionSpeed)
}

// DOM ready fanction
document.addEventListener('DOMContentLoaded', () => {
  // Get slider elements
  const slides = handleCreateSlides(images)
  const controls = handleCreateControls()

  // Add slider to the DOM
  slider.appendChild(slides)
  controls.forEach(control => slider.appendChild(control))

  // Buttons listeners
  const nextButton = slider.querySelector('.nick-next-btn')
  const prevButton = slider.querySelector('.nick-prev-btn')
  nextButton.addEventListener('click', () => (!nextButton.classList.contains('disabled') ? handleNextSlide() : {}))
  prevButton.addEventListener('click', () => (!prevButton.classList.contains('disabled') ? handlePrevSlide() : {}))

  // Set first slide active
  slider.querySelector('.nick-slider .nick-slide').classList.add('active')
})
