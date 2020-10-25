import { setAnimationStatus } from '@models/helpers/disablers'
import { isAnimation } from '@models/helpers/checkers'
import { toDot } from '@models/actions/dotsActions'
import CONFIG from '@models/config'

// Switch slide to prev or next
const switchSlide = where => {
  // Disable actions to prevent new action before animationg ends
  setAnimationStatus(true)

  const sliderScreen = document.querySelector(
    '[data-nick="nick-wrapper"] [data-nick="nick-slider"] [data-nick="nick-slider-screen"]'
  )
  const currentLeftValue = +getComputedStyle(sliderScreen).left.replace(/[^\d.-]/g, '')
  const currentActiveSlide = sliderScreen.querySelector('[data-nick="nick-slide"].active')

  // Add nex or prev slide to the variable
  const futureActiveSlide = where === 'prev' ? currentActiveSlide.previousSibling : currentActiveSlide.nextSibling

  if (futureActiveSlide) {
    // Do + or - based on next or prev slide direction
    sliderScreen.style.left =
      where === 'prev'
        ? `${currentLeftValue + futureActiveSlide.scrollWidth}px`
        : `${currentLeftValue - futureActiveSlide.scrollWidth}px`

    // Switch dot
    toDot(futureActiveSlide.getAttribute('data-nick-index'))

    // Replace active class
    currentActiveSlide.classList.remove('active')
    futureActiveSlide.classList.add('active')
  } else if (CONFIG.loop) {
    // Get index of the last slide
    const lastSliderIndex = sliderScreen.querySelectorAll('[data-nick="nick-slide"]').length - 1
    // Get next slide
    const loopSlide =
      where === 'prev'
        ? sliderScreen.querySelector(`[data-nick="nick-slide"][data-nick-index="${lastSliderIndex}"]`)
        : sliderScreen.querySelector('[data-nick="nick-slide"][data-nick-index="0"]')

    // If no prev - switch to the last slider. If no next - switch to the first slide
    sliderScreen.style.left = where === 'prev' ? `${-loopSlide.scrollWidth * lastSliderIndex}px` : '0px'

    // Switch dot
    toDot(loopSlide.getAttribute('data-nick-index'))

    // Replace active class
    currentActiveSlide.classList.remove('active')
    loopSlide.classList.add('active')
  }

  // Enable actions
  setTimeout(() => setAnimationStatus(false), CONFIG.transitionSpeed)
}

// Switch slide by index
const switchSlideByIndex = index => {
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

// Go to next slide
const toNextSlide = () => !isAnimation() && switchSlide('next')

// Go to prev slide
const toPrevSlide = () => !isAnimation() && switchSlide('prev')

// Go slide by index
const toSlide = index => !isAnimation() && switchSlideByIndex(index)

export { toNextSlide, toPrevSlide, toSlide }
