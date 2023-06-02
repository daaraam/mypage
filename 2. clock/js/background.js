const images = [
    '1.jpeg',
    '2.jpeg',
    '3.jpeg'
]

const chooseImage = images[Math.floor(Math.random() * images.length)];
const backGroundImage = document.createElement("img");

backGroundImage.src = `../img/${chooseImage}`;
document.body.appendChild(backGroundImage) 
//body에 html추가하기 

