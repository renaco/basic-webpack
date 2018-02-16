export function DomClass () {
  let getBody = document.querySelectorAll('body');
  let getNav = document.querySelectorAll('nav')[0];
  let getNavAnchor = document.querySelectorAll('nav a')[0];

  const Element = document.createElement;
  const otherType: string = 'My String';

  document.body.addEventListener('click', () => {
    console.log('otherTypeo', document.title);
    document.title = otherType;
  });

  getNav.className = 'app-function--nav';
  getNavAnchor.className = 'app-function';
}
