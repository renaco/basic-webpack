export class Sms {
  message: string;
  constructor() {
    this.message = 'this is sms';
  }
  loadClass() {
    let buttonSMS = document.querySelectorAll('#buttonSMS')[0];

    buttonSMS.addEventListener('click', (e) => {
      console.log(this.message, buttonSMS.parentElement.parentElement.parentElement.parentElement.parentElement);
    });
  }
}