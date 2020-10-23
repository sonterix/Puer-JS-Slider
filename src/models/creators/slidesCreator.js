import config from '@models/config'

// Handle to create slide elements base on array of images
const createSlides = images => {
  // Wrapper for slider
  const wrapper = document.createElement('div')
  wrapper.setAttribute('data-nick', 'nick-slider')
  // Add transition for an slide animation
  wrapper.style.transition = `left ${config.transitionSpeed}ms ease`

  // Generate slides
  images.forEach(image => {
    const slide = document.createElement('div')
    slide.setAttribute('data-nick', 'nick-slide')
    slide.setAttribute('style', `background-image: url(${image})`)

    // Add slide to wraooer
    wrapper.appendChild(slide)
  })

  return wrapper
}

export { createSlides }
