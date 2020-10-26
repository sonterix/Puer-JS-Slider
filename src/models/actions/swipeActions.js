import { toNextSlide, toPrevSlide, toSlide } from '@models/actions/arrowsActions'
import { isAnimation } from '@models/helpers/checkers'
import { throttle } from '@models/helpers/disablers'

const swipeSlider = nickWrapper => {
  const slider = nickWrapper.querySelector('[data-nick="nick-wrapper"] [data-nick="nick-slider"]')
  const sliderScreen = slider.querySelector('[data-nick="nick-slider-screen"]')

  // Store coordinates
  let startX = 0
  let startY = 0

  const swipeStart = ({ changedTouches, offsetX, offsetY }) => {
    // Preventing unnecessary swipe checker
    if (isAnimation()) return

    startX = offsetX ?? changedTouches[0]?.screenX
    startY = offsetY ?? changedTouches[0]?.screenY

    // Desktop. mousemove to detect move cursor. mouseleave to detect when cursor outside
    slider.addEventListener('mousemove', swipeMove)
    slider.addEventListener('mouseleave', swipeEnd)
    // Phone. touchmove to detect move finger
    slider.addEventListener('touchmove', swipeMove)
  }

  const swipeMove = throttle(({ changedTouches, offsetX }) => {
    // Preventing unnecessary swipe checker
    if (isAnimation()) return

    // Set coordinates
    const endX = offsetX ?? changedTouches[0]?.screenX
    // Calculate differences
    const diffX = endX - startX

    // Live swipe slide
    const currentLeftValue = +getComputedStyle(sliderScreen).left.replace(/[^\d.-]/g, '')
    sliderScreen.classList.add('swipping')
    sliderScreen.style.left = `${currentLeftValue + diffX / 100}px`
  }, 5)

  const swipeEnd = ({ changedTouches, offsetX, offsetY }) => {
    // Removing swipe desktop move actions
    slider.removeEventListener('mousemove', swipeMove)
    slider.removeEventListener('mouseleave', swipeEnd)
    // Removing swipe mobile move actions
    slider.removeEventListener('touchmove', swipeMove)

    // Preventing unnecessary swipe checker
    if (isAnimation()) return

    // Set coordinates
    const endX = offsetX ?? changedTouches[0]?.screenX
    const endY = offsetY ?? changedTouches[0]?.screenY
    // Calculate differences
    const diffX = endX - startX
    const diffY = endY - startY
    // Calculate ratio
    const ratioX = Math.abs(diffX / diffY)
    const ratioY = Math.abs(diffY / diffX)
    // Calculate minore swipe
    const isMinoreSwipe = Math.abs(ratioX > ratioY ? diffX : diffY) < 50
    // Current active slide index
    const currentActiveIndex = sliderScreen
      .querySelector('[data-nick="nick-slide"].active')
      .getAttribute('data-nick-index')

    // Ignore small movements
    if (isMinoreSwipe) return toSlide(currentActiveIndex)

    // Get swipe to the left or to the right
    ratioX > ratioY && diffX >= 0 ? toPrevSlide() : toNextSlide()
    // Remove swipping
    sliderScreen.classList.remove('swipping')
  }

  // Swipe for desktop
  slider.addEventListener('mousedown', swipeStart)
  slider.addEventListener('mouseup', swipeEnd)
  // Swipe for mobile
  slider.addEventListener('touchstart', swipeStart)
  slider.addEventListener('touchend', swipeEnd)
}

const autoplaySlider = speed =>
  setInterval(() => {
    toNextSlide()
  }, speed)

export { swipeSlider, autoplaySlider }
