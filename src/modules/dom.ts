export function DomClass() {
  let getNav = document.querySelectorAll('nav')[0];
  let getNavAnchor = document.querySelectorAll('nav a')[0];

  const otherType: string = 'My String';

  document.body.addEventListener('click', () => {
    console.log('otherType', document.title);
    document.title = otherType;
  });

  getNav.className = 'app-function--nav';
  getNavAnchor.className = 'app-function';
}
