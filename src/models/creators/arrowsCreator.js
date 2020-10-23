// Handle to create controls for slider
const createArrows = () => {
  const nextButton = document.createElement('button')
  const prevButton = document.createElement('button')

  // Add type
  nextButton.setAttribute('type', 'button')
  prevButton.setAttribute('type', 'button')

  nextButton.setAttribute('data-nick', 'nick-next-btn')
  prevButton.setAttribute('data-nick', 'nick-prev-btn')

  // Add controls
  nextButton.innerHTML = '⯈'
  prevButton.innerHTML = '⯇'

  return {
    createdNextBtn: nextButton,
    createdPrevBtn: prevButton
  }
}

export { createArrows }
