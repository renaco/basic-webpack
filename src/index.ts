import * as Index from './modules/index';
// import { Sms } from './modules/sms';
let buttonSMS = document.querySelectorAll('#buttonSMS')[0];

buttonSMS.addEventListener('click', (e) => {
  console.log('sss', buttonSMS.parentElement.parentElement.parentElement.parentElement.parentElement);
});

console.log('load js transpile');
