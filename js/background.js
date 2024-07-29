const images = [
    '000.jpeg', '001.jpeg', '002.jpeg',
    '003.jpeg', '004.jpeg', '005.jpeg',
    '006.jpeg', '007.jpeg', '008.jpeg',
    '009.jpeg', '010.jpeg', '011.jpeg',
    '012.jpeg', '013.jpeg', '014.jpeg',
    '015.jpeg', '016.jpeg',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
bgImage.src = `./img/${chosenImage}`;

document.body.appendChild(bgImage);