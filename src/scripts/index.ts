import { HTML } from './modules/const';
document.getElementById('mensajeria').innerHTML = HTML;

// import * as Email from './modules/email';
import * as Sms from './modules/sms';
// import * as Download from './modules/download-pdf';
import { SendSMS } from './modules/send-sms/index';
// import { Validate } from './modules/global/validate';
import { SmsButton } from './modules/SmsButton';

// Download.downloadPDF();
// Email.sendEmail();
// Sms.sendSMS(this);
// SendSMS;
let movilButton = new SmsButton("buttonSMS", "inputSMS","buttonSendSMS");
movilButton.init();
// a.sendSMS();

console.log('load js transspsissless');
