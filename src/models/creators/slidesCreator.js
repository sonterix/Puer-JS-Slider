// Handle to create slide elements base on array of images
const createSlides = images => {
  // Wrapper for slider
  const wrapper = document.createElement('div')
  wrapper.classList.add('nick-slider')
  // Add transition for an slide animation
  wrapper.style.transition = `left ${config.transitionSpeed}ms ease`

  // Generate slides
  const slides = images.forEach(image => {
    const slide = document.createElement('div')
    slide.classList.add('nick-slide')
    slide.setAttribute('style', `background-image: url(${image})`)

    // Add slide to wraooer
    wrapper.appendChild(slides)
  })

  return wrapper
}

export { createSlides }
