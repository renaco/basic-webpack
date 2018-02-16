// import * as Sms from './sms';
import * as Toggle from './toggle';
import log from './global/log';
// import Validate from './global/validate';

let buttonSMS = <HTMLInputElement>document.querySelectorAll('#buttonSMS')[0];
let inputSMS = <HTMLInputElement>document.querySelectorAll('#inputSMS')[0];
let getBody = <HTMLElement>document.body;
let buttonSendSMS = <HTMLSelectElement>document.getElementById('buttonSendSMS');
let imageCaptcha = <HTMLSelectElement>document.getElementById('imageCaptcha');

export function sendSMS(e) {
  getBody.addEventListener('click', (e) => {
    // console.log(event.target != buttonSMS && event.target != inputSMS)
    //   // if (inputSMS.classList.contains('is_hide') == false && (inputSMS.classList.length === 1) == true) {
    //   if (event.target != buttonSMS) {
    //     // console.info('outside');
    //       // if (inputSMS.classList.contains('is_hide') == false) {
    //         // Toggle.toggleElement(buttonSMS.previousElementSibling);
    //       // }
    //       inputSMS.value = '';
    //     }
      })
    }
    
class SendSMS {
  constructor( ) {
    // console.log('into class');
    buttonSMS.addEventListener('click', (event: any) => {
      // console.info(event.target);
      Toggle.toggleElement(inputSMS);
      Toggle.toggleElement(buttonSendSMS);
      // Toggle.toggleElement(imageCaptcha);
      if (event.target != buttonSMS && event.target != inputSMS) {
        console.log('is click outer')
      }
      setTimeout(() => {
        inputSMS.focus();
      }, 0);
    })
  }
}

new SendSMS();
