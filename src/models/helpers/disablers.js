// Disable arrows
const disableArrows = (status = false) => {
  // Array of elements to disable
  const actions = [
    document.querySelector('[data-nick="nick-wrapper"] [data-nick="nick-next-btn"]'),
    document.querySelector('[data-nick="nick-wrapper"] [data-nick="nick-prev-btn"]')
  ]

  // Adding 'disable' class to each element from the array or remove it
  actions.forEach(action => (!status ? action.classList.add('disabled') : action.classList.remove('disabled')))
}

// Set 'animation' class to slider wrapper
const setAnimationStatus = (status = false) => {
  const wrapper = document.querySelector('[data-nick="nick-wrapper"]')
  status ? wrapper.classList.add('animation') : wrapper.classList.remove('animation')
}

export { disableArrows, setAnimationStatus }
