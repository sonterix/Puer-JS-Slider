import CONFIG from '@models/config'

const createWrapper = wrapper => {
  // Clear tag
  wrapper.innerHTML = ''
  // Add attribute
  wrapper.setAttribute('data-nick', 'nick-wrapper')
  // Add styles based on config file
  wrapper.style.maxWidth = CONFIG.maxWidth
  wrapper.style.width = CONFIG.width
  wrapper.style.height = CONFIG.height
}

export default createWrapper
