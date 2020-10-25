import { toSlide } from '@models/actions/arrowsActions'

const toDot = index => {
  const dots = document.querySelector('[data-nick="nick-wrapper"] [data-nick="nick-dots"]')

  // Stop function if there are no dots
  if (!dots) return

  const futureActiveDot = dots.querySelector(`[data-nick="nick-dot"][data-nick-index="${index}"]`)
  const currentActiveDot = dots.querySelector('[data-nick="nick-dot"].active')

  // Change slide by index
  toSlide(index)

  // Replace active class
  currentActiveDot.classList.remove('active')
  futureActiveDot.classList.add('active')
}

export { toDot }
