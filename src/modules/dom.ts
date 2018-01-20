export function DomClass () {
  let getBody = document.querySelectorAll('body');

  const Element = document.createElement;
  const otherType: string = 'My String';
  
  window.addEventListener('click', () => {
    console.log('otherTypeo', otherType);
  });

  let geButton: (e: any) => {
  }

  document.title = otherType;
}
