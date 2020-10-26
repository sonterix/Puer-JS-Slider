import { setAnimationStatus } from '@models/helpers/disablers'
import { isAnimation } from '@models/helpers/checkers'
import { toDot } from '@models/actions/dotsActions'

// Switch slide by index
const switchSlideByIndex = index => {
  const CONFIG = document.nickConfig

  // Disable actions to prevent new action before animationg ends
  setAnimationStatus(true)

  const sliderScreen = document.querySelector(
    '[data-nick="nick-wrapper"] [data-nick="nick-slider"] [data-nick="nick-slider-screen"]'
  )
  const currentActiveSlide = sliderScreen.querySelector('[data-nick="nick-slide"].active')
  const futureActiveSlide = sliderScreen.querySelector(`[data-nick="nick-slide"][data-nick-index="${index}"]`)
  const newtLeftValue = -futureActiveSlide.scrollWidth * index

  // Add new left porop to slider screen
  sliderScreen.style.left = `${newtLeftValue}px`

  // Replace active class
  currentActiveSlide.classList.remove('active')
  futureActiveSlide.classList.add('active')

  // Enable actions
  setTimeout(() => setAnimationStatus(false), CONFIG.transitionSpeed)
}

// Switch slide to prev or next
const switchSlide = where => {
  const CONFIG = document.nickConfig

  const sliderScreen = document.querySelector(
    '[data-nick="nick-wrapper"] [data-nick="nick-slider"] [data-nick="nick-slider-screen"]'
  )
  const currentActiveSlide = sliderScreen.querySelector('[data-nick="nick-slide"].active')
  // Add nex or prev slide to the variable
  const futureActiveSlide = where === 'prev' ? currentActiveSlide.previousSibling : currentActiveSlide.nextSibling

  if (futureActiveSlide) {
    // Get future active slide index
    const futureActiveSlideIncex = futureActiveSlide.getAttribute('data-nick-index')
    // Switch slide
    switchSlideByIndex(futureActiveSlideIncex)
    // Switch dot
    toDot(futureActiveSlideIncex)
  } else if (CONFIG.loop) {
    // Get index of the last slide
    const lastSliderIndex = sliderScreen.querySelectorAll('[data-nick="nick-slide"]').length - 1
    // Get next slide
    const loopSlideIndex = where === 'prev' ? lastSliderIndex : 0
    // Switch slide
    switchSlideByIndex(loopSlideIndex)
    // Switch dot
    toDot(loopSlideIndex)
  }
}

// Go to next slide
const toNextSlide = () => !isAnimation() && switchSlide('next')

// Go to prev slide
const toPrevSlide = () => !isAnimation() && switchSlide('prev')

// Go slide by index
const toSlide = index => !isAnimation() && switchSlideByIndex(index)

export { toNextSlide, toPrevSlide, toSlide }
