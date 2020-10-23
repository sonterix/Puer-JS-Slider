import { createSlides } from '@models/creators/slidesCreator'
import { createArrows } from '@models/creators/arrowsCreator'
import { toNextSlide, toPrevSlide } from '@models/actions/arrowActions'

const nickSlider = (nickWrapper, nickSlides, config) => {
  // Get slider elements
  const slides = createSlides(nickSlides)
  const controls = createArrows()

  // Add slider to the DOM
  nickWrapper.appendChild(slides)
  controls.forEach(control => nickWrapper.appendChild(control))

  // Buttons listeners
  const nextButton = nickWrapper.querySelector('.nick-next-btn')
  const prevButton = nickWrapper.querySelector('.nick-prev-btn')
  nextButton.addEventListener('click', () => (!nextButton.classList.contains('disabled') ? toNextSlide() : {}))
  prevButton.addEventListener('click', () => (!prevButton.classList.contains('disabled') ? toPrevSlide() : {}))

  // Set first slide active
  nickWrapper.querySelector('.nick-slider .nick-slide').classList.add('active')
}

export default nickSlider
