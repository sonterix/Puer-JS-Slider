// Handle to create controls for slider
const createArrows = () => {
  const nextButton = document.createElement('button')
  const prevButton = document.createElement('button')

  // Add type
  nextButton.setAttribute('type', 'button')
  prevButton.setAttribute('type', 'button')

  // Add classes
  nextButton.classList.add('nick-next-btn')
  prevButton.classList.add('nick-prev-btn')

  // Add controls
  nextButton.innerHTML = '⯈'
  prevButton.innerHTML = '⯇'

  return [nextButton, prevButton]
}

export { createArrows }
