import * as Index from './modules/index';
let myTitle: string = 'this is my title';
let myButton = document.querySelectorAll('#myButton')[0];
let myBody = document.body;

myButton.addEventListener('click', (e) => {
  console.log('hello world', Index.myFunction, myTitle);
  myBody.classList ? myBody.classList.add('app-body') : myBody.className += ' ' + 'app-body'
  myButton.classList ? myButton.classList.add('app-body-link') : myButton.className += ' ' + 'app-body-link'
});
