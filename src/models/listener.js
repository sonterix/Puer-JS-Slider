import { toNextSlide, toPrevSlide } from '@models/actions/arrowsActions'

const listener = ({ target }) => {
  target.closest('[data-nick="nick-next-btn"]') && toNextSlide()
  target.closest('[data-nick="nick-prev-btn"]') && toPrevSlide()
}

export default listener
