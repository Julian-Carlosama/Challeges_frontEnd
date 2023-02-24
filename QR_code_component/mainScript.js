const myQRCode = document.getElementById('QrCode');

//new newQRCode(myQRCode, 'https://juliancarlosama.com/');

//const qr = new QRCode(myQRCode, 'https://juliancarlosama.com/');
const qr = new QRCode(myQRCode, 
    {
        text: 'https://juliancarlosama.com/',
        with: 150,
        height: 250,
        colorDark: '#ffffff',
        colorLight:'#0784F1',
        correctLevel : QRCode.CorrectLevel.H
    });