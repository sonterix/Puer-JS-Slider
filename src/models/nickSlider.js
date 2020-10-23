import createSlides from '@models/creators/createSlides'
import createArrows from '@models/creators/createArrows'
import createWrapper from '@models/creators/createWrapper'
import listener from '@models/listener'
import CONFIG from '@models/config'

const NickSlider = (nickWrapper, nickSlidesURLs) => {
  // Config wrapper
  createWrapper(nickWrapper)

  // Get slider elements and set first slide active
  const createdSlides = createSlides(nickSlidesURLs)
  createdSlides.querySelector('[data-nick="nick-slide"]').classList.add('active')

  // Get arrows
  const [createdNextBtn, createdPrevBtn] = CONFIG.arrows ? createArrows() : ['', '']

  // Add slider elements to the DOM
  nickWrapper.append(createdSlides, createdNextBtn, createdPrevBtn)

  // Slider listener
  nickWrapper.addEventListener('click', listener)

  // Return fuction to disable slider
  return () => nickWrapper.removeEventListener('click', listener)
}

export default NickSlider
