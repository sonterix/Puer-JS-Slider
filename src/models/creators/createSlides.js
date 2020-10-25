import CONFIG from '@models/config'

const createSlides = slides => {
  // Wrapper for slider
  const slider = document.createElement('div')
  slider.setAttribute('data-nick', 'nick-slider')

  const sliderScreen = document.createElement('div')
  sliderScreen.setAttribute('data-nick', 'nick-slider-screen')

  // Add styles based on config file
  sliderScreen.style.transition = `left ${CONFIG.transitionSpeed}ms ease`

  // Generate slides
  slides.forEach((slideUrl, index) => {
    const slide = document.createElement('div')

    // Set attributes
    slide.setAttribute('data-nick', 'nick-slide')
    slide.setAttribute('data-nick-index', index)
    slide.setAttribute('style', `background-image: url(${slideUrl})`)

    // Add slide to slides
    sliderScreen.appendChild(slide)
  })

  // Set first slide active
  slider.append(sliderScreen)
  slider.querySelector('[data-nick="nick-slide"][data-nick-index="0"]').classList.add('active')

  return slider
}

export default createSlides
