let myButton = document.querySelectorAll('#myButton')[0];
let myBody = document.body;
let myVideo = document.querySelectorAll('iframe')[0];

myButton.addEventListener('click', (e) => {
  myBody.classList ? myBody.classList.add('app-body') : myBody.className += ' ' + 'app-body';
  myButton.classList ? myButton.classList.add('app-body-link') : myButton.className += ' ' + 'app-body-link';
  myVideo.style.display = 'block';
});


