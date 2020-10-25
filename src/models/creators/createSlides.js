import CONFIG from '@models/config'

const createSlides = slides => {
  // Wrapper for slider
  const sliderWrapper = document.createElement('div')
  sliderWrapper.setAttribute('data-nick', 'nick-slider')

  // Add styles based on config file
  sliderWrapper.style.transition = `left ${CONFIG.transitionSpeed}ms ease`

  // Generate slides
  slides.forEach((slideUrl, index) => {
    const slide = document.createElement('div')

    // Set attributes
    slide.setAttribute('data-nick', 'nick-slide')
    slide.setAttribute('style', `background-image: url(${slideUrl})`)
    slide.setAttribute('data-nick-index', index)

    // Add slide to slides
    sliderWrapper.appendChild(slide)
  })

  return sliderWrapper
}

export default createSlides
