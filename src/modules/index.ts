// import { DomClass } from './dom';

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
