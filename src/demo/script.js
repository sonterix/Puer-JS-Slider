import NickSlider from '@/NickSlider'
import '@demo/styles.scss'

const slider = document.querySelector('#slider')
const images = [
  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
  'https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg',
  'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg',
  'https://cdn.pixabay.com/photo/2018/07/12/11/45/sunrise-3533173__340.jpg',
  'https://www.wasaweb.net/images/stock-images/851x315/xLondon-228.jpg.pagespeed.ic.E1pi6Mnw7T.jpg'
]

// Init slider and get function to disable slider
const disableSlider = NickSlider(slider, images, {
  loop: true,
  dots: true
})
