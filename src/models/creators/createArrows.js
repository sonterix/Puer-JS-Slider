const createArrows = () => {
  const nextButn = document.createElement('button')
  const prevBtn = document.createElement('button')

  // Add type
  nextButn.setAttribute('type', 'button')
  prevBtn.setAttribute('type', 'button')

  // Add data attributes
  nextButn.setAttribute('data-nick', 'nick-next-btn')
  prevBtn.setAttribute('data-nick', 'nick-prev-btn')

  // Add controls
  nextButn.innerHTML = '⯈'
  prevBtn.innerHTML = '⯇'

  return [nextButn, prevBtn]
}

export default createArrows
