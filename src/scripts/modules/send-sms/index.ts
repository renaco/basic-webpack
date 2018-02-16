// import { Validate } from './../../modules/global/validate';
let buttonSendSMS: HTMLButtonElement = document.querySelector('#buttonSendSMS');
let inputSMS: HTMLInputElement = document.querySelector('#inputSMS');

buttonSendSMS.addEventListener('click', () => {
  let classSend = new SendSMS();
})

export class SendSMS {
  
  constructor() {
    this.sendSMS();
  }
  
  sendSMS() {
    console.log('send sms from class');
    setTimeout(() => {
      inputSMS.setAttribute('disabled', '');
    }, 3000)
  }
}
