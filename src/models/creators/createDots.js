const createArrows = slides => {
  // Wrapper for dots
  const dots = document.createElement('div')
  dots.setAttribute('data-nick', 'nick-dots')

  // Generate dots base on slides amount
  slides.forEach((_, index) => {
    const dot = document.createElement('div')

    // Set attributes
    dot.setAttribute('data-nick', 'nick-dot')
    dot.setAttribute('data-nick-index', index)

    // Add dot to dots
    dots.appendChild(dot)
  })

  // Set first dot active
  dots.querySelector('[data-nick="nick-dot"][data-nick-index="0"]').classList.add('active')

  return dots
}

export default createArrows
