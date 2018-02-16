export function toggleElement(el) {
  const getElement = el;
  try {
    if (getElement.classList) {
      getElement.classList.toggle('is_hide')
    } else {
      let classes = getElement.className.split(' ')
      let existingIndex = this.classes.indexOf('is_hide')
      
      if (this.existingIndex >= 0) {
        this.classes.splice(this.existingIndex, 1)
      } else {
        this.classes.push('is_hide')
      }
      getElement.className = this.classes.join(' ')
    }

  } catch(e) {
    console.error('error')
  }
}
