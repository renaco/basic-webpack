import * as Email from './modules/email';
import * as Sms from './modules/sms';
import * as Download from './modules/download-pdf';

Download.downloadPDF();
Email.sendEmail();
Sms.sendSMS();

console.log('load js transpile');
