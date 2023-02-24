const myQRCode = document.getElementById('QrCode');

//new newQRCode(myQRCode, 'https://juliancarlosama.com/');

//const qr = new QRCode(myQRCode, 'https://juliancarlosama.com/');
const qr = new QRCode(myQRCode, 
    {
        text: 'https://juliancarlosama.com/',
        width: 150,
        height: 150,
        colorDark: '#ffffff',
        colorLight:'#077FFF',
        correctLevel : QRCode.CorrectLevel.H
    });