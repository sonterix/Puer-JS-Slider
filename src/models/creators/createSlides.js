import CONFIG from '@models/config'

// Handle to create slide elements base on array of images
const createSlides = slides => {
  // Wrapper for slider
  const sliderWrapper = document.createElement('div')
  sliderWrapper.setAttribute('data-nick', 'nick-slider')

  // Add styles based on config file
  sliderWrapper.style.transition = `left ${CONFIG.transitionSpeed}ms ease`

  // Generate slides
  slides.forEach(slideUrl => {
    const slide = document.createElement('div')

    // Set attributes
    slide.setAttribute('data-nick', 'nick-slide')
    slide.setAttribute('style', `background-image: url(${slideUrl})`)

    // Add slide to wraooer
    sliderWrapper.appendChild(slide)
  })

  return sliderWrapper
}

export default createSlides
