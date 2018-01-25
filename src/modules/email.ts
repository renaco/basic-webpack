export function sendEmail() {
  let buttonEmail = document.querySelectorAll('#buttonEmail')[0];
  let message: string = 'send email';

  buttonEmail.addEventListener('click', (e) => {
    console.log(message, buttonEmail.parentElement);
  });

}