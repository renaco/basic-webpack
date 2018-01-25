export function toggleElement(el) {
  console.clear();
  let getElement = el;
  console.log('el from togsssgle', el, getElement.classList);
  if (getElement.classList) {
    getElement.classList.toggle('is_hide');
  } 
  else {
    let classes = getElement.className.split(' ');
    let exstingIndex = this.classes.indexOf('is_hide');

    if (this.existingIndex >= 0) {
      this.classes.splice(this.exstingIndex, 1)
    } else {
      this.classes.push('is_hide');
    }
    getElement.className = this.classes.join(' ');
  }
}