import { Button } from './Button';
import { toggleElement } from './toggle/index';

export class SmsButton extends Button{
  public spanError: HTMLDivElement = document.querySelector('#spanError');

  init(){
    this.onClick( () => { this.viewInput() }, this.id);
    this.onClick( () => { this.sendSMS() }, this.actionButton);
    this.elementMate.onkeydown = (evt) => {
      this.elementMate.classList.remove('is_error');
      this.spanError.classList.contains('is_hide') ? undefined : toggleElement(this.spanError);
      return this.validateNumber(evt);
    }
  }
  
  sendSMS() {
    if (this.validationPhoneNumber(this.elementMate.value)) {
      //callback ajax
      setTimeout(() => {
        this.sendCount ++;
        toggleElement(this.msgText);
      }, 3000)
    } else {
      this.elementMate.classList.add('is_error');
      this.spanError.classList.contains('is_hide') ? toggleElement(this.spanError) : undefined;
    }
  }
  
  validationPhoneNumber(parameter) {
    if (/^[0-9]{9}$/.test(parameter)) {
      return true;
    } else {
      return false;
    }
  }

  validateNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && !(charCode >= 96 && charCode <= 105 )) {
      return false;
    }
    return true;
  }
}
