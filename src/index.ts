import * as Index from './modules/index';
import { DomClass } from './modules/dom';
let myTitle: string = 'this is my title';
let myButton = document.querySelectorAll('#myButton')[0];
let myBody = document.body;

myButton.addEventListener('click', (e) => {
  myBody.classList ? myBody.classList.add('app-body') : myBody.className += ' ' + 'app-body';
  myButton.classList ? myButton.classList.add('app-body-link') : myButton.className += ' ' + 'app-body-link';
  console.log('DomClass', typeof DomClass);
  DomClass();
});


