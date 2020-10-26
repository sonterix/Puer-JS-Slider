import { toNextSlide, toPrevSlide } from '@models/actions/arrowsActions'
import { toDot } from '@models/actions/dotsActions'
import { isAnimation } from '@models/helpers/checkers'

const listener = ({ target }) => {
  if (isAnimation()) return

  const nextArrow = target.closest('[data-nick="nick-next-btn"]')
  const prevArrow = target.closest('[data-nick="nick-prev-btn"]')
  const dot = target.closest('[data-nick="nick-dot"]')

  // Click on the arrow
  nextArrow && toNextSlide()
  prevArrow && toPrevSlide()
  // Click on the dot
  dot && toDot(dot.getAttribute('data-nick-index'))
}

export default listener
