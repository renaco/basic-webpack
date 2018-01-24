import { DomClass } from './dom';
import { Sms } from './sms';

export class myClass {

  myVarIntoClass: string;

  constructor(
  ) {
    this.myVarIntoClass = 'some';
  }

  myFunction() {
    console.log('from console', this.myVarIntoClass);
  }
}
