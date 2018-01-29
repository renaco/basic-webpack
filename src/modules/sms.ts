import * as Sms from './sms';
import * as Toggle from './toggle';
import log from './global/log';

export function sendSMS() {
  let buttonSMS = document.querySelectorAll('#buttonSMS')[0];

  buttonSMS.addEventListener('click', (e) => {
    console.log(e.srcElement.previousElementSibling);
    // console.log(buttonSMS.parentElement.parentElement.parentElement.parentElement.parentElement);
    Toggle.toggleElement(e.srcElement.previousElementSibling);
  });

  document.body.addEventListener('click', (event) => {
    console.log('clicked', event.target.classList.value);
    // if (event.target !== (event.target.id)) {

    // }
  })

}
