const Tesseract = require('tesseract.js');

// Tesseract.recognize(
//     './assets/billboard.jpg',
//     'eng'
// ).then(({ data: { text } }) => {
//     console.log(text);
// });

// Tesseract.recognize(
//     './assets/gloom.jpg',
//     'eng'
// ).then(({ data: { text} }) => {
//     console.log(text);
// });

Tesseract.recognize(
    './assets/numbers.png',
    'eng'
).then(({ data: { text} }) => {
    console.log(text);
});

Tesseract.recognize(
    './assets/set.png',
    'eng'
).then(({ data: { text} }) => {
    console.log(text);
});

Tesseract.recognize(
    './assets/card-name.png',
    'eng'
).then(({ data: { text} }) => {
    console.log(text);
})