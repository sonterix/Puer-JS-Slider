// Return true or false depends on animation status
const isAnimation = () => document.querySelector('[data-nick="nick-wrapper"]').classList.contains('animation')

// Return true or false depends on swipping status
const isSwipping = () =>
  document
    .querySelector('[data-nick="nick-wrapper"] [data-nick="nick-slider"] [data-nick="nick-slider-screen"]')
    .classList.contains('swipping')

export { isAnimation, isSwipping }
