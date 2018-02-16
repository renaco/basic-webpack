export function downloadPDF() {
  let buttonDownload = document.querySelectorAll('#buttonDownload')[0];
  let message: string = 'download pdf';

  buttonDownload.addEventListener('click', (e) => {
    console.log(buttonDownload.classList);
    console.log(buttonDownload);
  });

}