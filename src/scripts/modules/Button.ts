import { toggleElement } from './toggle/index';

export class Button {
  public id: any;
  public elementMate: any;
  public actionButton: any;
  public sendCount: any;
  public msgText: HTMLDivElement = document.querySelector('#statusMessage');
  private clickStatus: boolean;

  constructor(id: string, elementMate: string, actionButton: string) {
    this.id = <HTMLSelectElement>document.getElementById(id);
    this.elementMate = <HTMLSelectElement>document.getElementById(elementMate);
    this.actionButton = <HTMLSelectElement>document.getElementById(actionButton);
    this.sendCount = 0;
    this.clickStatus = false;
  }

  onClick(callback, parameter) {
    parameter.addEventListener('click',(event: any) => {
      callback();
    })
  }
  
  viewInput() {
    this.clickStatus = !this.clickStatus;
    this.elementMate ? toggleElement(this.elementMate) : undefined;
    this.actionButton ? toggleElement(this.actionButton) : undefined;
    if (event.target != this.id && event.target != this.elementMate) {
      console.log('is click outer');
    }
    if (this.clickStatus) { 
      setTimeout(() => {
        this.elementMate.focus();
      }, 0);
    } else {
      this.destroy();
    }
  }

  // recomendation: move destroy function to child class. When you work in PETCIP-31.
  destroy() {
    this.elementMate ? this.elementMate.value = '' : undefined;
    this.msgText.classList.contains("is_hide") ? undefined : toggleElement(this.msgText);
    this.elementMate.classList.contains("is_hide") ? undefined : toggleElement(this.elementMate);
    this.actionButton.classList.contains("is_hide") ? undefined : toggleElement(this.actionButton);
  }
}
