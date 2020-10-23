import { disableArrows } from '@models/helpers/disablers'

// Handle to create next slide button
const toNextSlide = () => {
  // Disable actions to prevent new action before animationg ends
  disableArrows()

  // Get slider wrrapper and left value of the wrapper. Left value conver to number
  const sliderWrapper = nickWrapper.querySelector('.nick-slider')
  const sliderWrapperLeft = +getComputedStyle(sliderWrapper).left.replace('px', '')

  // Get current active and next active slides
  const activeSlide = nickWrapper.querySelector('.nick-slider .nick-slide.active')
  const nextAfterActive = activeSlide.nextSibling

  // Move to next slide
  sliderWrapper.style.left = nextAfterActive
    ? `${sliderWrapperLeft - nextAfterActive.scrollWidth}px`
    : `${sliderWrapperLeft}px`

  // Replace active class
  nextAfterActive && activeSlide.classList.remove('active')
  nextAfterActive && nextAfterActive.classList.add('active')

  // Enable actions
  setTimeout(() => disableArrows(true), config.transitionSpeed)
}

// Handle to create prev slide button
const toPrevSlide = () => {
  // Disable actions to prevent new action before animationg ends
  disableArrows()

  // Get slider wrrapper and left value of the wrapper. Left value conver to number
  const sliderWrapper = nickWrapper.querySelector('.nick-slider')
  const sliderWrapperLeft = +getComputedStyle(sliderWrapper).left.replace('px', '')

  // Get current active and next active slides
  const activeSlide = nickWrapper.querySelector('.nick-slider .nick-slide.active')
  const prevAfterActive = activeSlide.previousSibling

  // Move to next slide
  sliderWrapper.style.left = prevAfterActive ? `${sliderWrapperLeft + prevAfterActive.scrollWidth}px` : 0

  // Replace active class
  prevAfterActive && activeSlide.classList.remove('active')
  prevAfterActive && prevAfterActive.classList.add('active')

  // Enable actions
  setTimeout(() => disableArrows(true), config.transitionSpeed)
}

export { toNextSlide, toPrevSlide }
