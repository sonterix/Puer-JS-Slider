import { createSlides } from '@models/creators/slidesCreator'
import { createArrows } from '@models/creators/arrowsCreator'
import { toNextSlide, toPrevSlide } from '@models/actions/arrowActions'

const nickSlider = (nickWrapper, nickSlides, nickConfig) => {
  nickWrapper.setAttribute('data-nick', 'nick-wrapper')

  // Get slider elements
  const createdSlides = createSlides(nickSlides)
  const { createdNextBtn, createdPrevBtn } = createArrows()

  // Add slider to the DOM
  nickWrapper.append(createdSlides, createdNextBtn, createdPrevBtn)

  // Buttons listeners
  const nextButton = nickWrapper.querySelector('[data-nick="nick-next-btn"]')
  const prevButton = nickWrapper.querySelector('[data-nick="nick-prev-btn"]')
  nextButton.addEventListener('click', () => (!nextButton.classList.contains('disabled') ? toNextSlide() : {}))
  prevButton.addEventListener('click', () => (!prevButton.classList.contains('disabled') ? toPrevSlide() : {}))

  nickWrapper.addEventListener('click', ({ target }) => {
    console.log(target)
  })

  // Set first slide active
  nickWrapper.querySelector('[data-nick="nick-slider"] [data-nick="nick-slide"]').classList.add('active')
}

export default nickSlider
