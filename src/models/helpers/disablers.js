// Handle to disable button during an animation
const disableArrows = (status = false) => {
  // Array of elements to disable during an animation
  const actions = [
    document.querySelector('[data-nick="nick-wrapper"] [data-nick="nick-next-btn"]'),
    document.querySelector('[data-nick="nick-wrapper"] [data-nick="nick-prev-btn"]')
  ]

  // Adding 'disable' class to each element from the array
  actions.forEach(action => (!status ? action.classList.add('disabled') : action.classList.remove('disabled')))
}

export { disableArrows }
