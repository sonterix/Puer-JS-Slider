import createSlides from '@models/creators/createSlides'
import createDots from '@models/creators/createDots'
import createArrows from '@models/creators/createArrows'
import createWrapper from '@models/creators/createWrapper'
import { swipeSlider, autoplaySlider } from '@models/actions/swipeActions'
import listener from '@models/listener'
import DEFAULT_CONFIG from '@models/config'

import '@styles/index.scss'

const NickSlider = (nickWrapper, nickSlidesURLs, nickConfig = {}) => {
  // Store config for slider in document object
  const CONFIG = { ...DEFAULT_CONFIG, ...nickConfig }
  document.nickConfig = CONFIG

  // Config wrapper
  createWrapper(nickWrapper)

  // Get slider elements
  const createdSlides = createSlides(nickSlidesURLs)
  // Get dost elements
  const createdDots = CONFIG.dots ? createDots(nickSlidesURLs) : ['']
  // Get arrows
  const [createdNextBtn, createdPrevBtn] = CONFIG.arrows ? createArrows() : ['', '']

  // Add slider elements to the DOM
  nickWrapper.append(createdSlides, createdDots, createdNextBtn, createdPrevBtn)

  // Slider listener
  nickWrapper.addEventListener('click', listener)

  // Slider swipe listener
  CONFIG.loop && swipeSlider(nickWrapper)

  // Autoplay
  CONFIG.autoplay && autoplaySlider(CONFIG.autoplaySpeed)

  // Return fuction to disable slider
  return () => nickWrapper.removeEventListener('click', listener)
}

export default NickSlider
