import * as Sms from './sms';
import * as Toggle from './toggle';

export function sendSMS() {
  let buttonSMS = document.querySelectorAll('#buttonSMS')[0];

  buttonSMS.addEventListener('click', (e) => {
    console.log(buttonSMS.parentElement.parentElement.parentElement.parentElement.parentElement);
    Toggle.toggleElement(e);
  });

}