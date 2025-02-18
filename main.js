// Array of South Park character images
const characters = [
    'https://th.bing.com/th/id/R.bb698f697677461e35220d09c3ebba4e?rik=%2b5nH88Wnp%2bETXA&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/OIP.y0Kg5J1jlM8P6ew0kfriHAHaLl?w=663&h=1037&rs=1&pid=ImgDetMain',
    'https://example.com/southpark/https://i.pinimg.com/originals/23/a4/08/23a408bf1ebbee4d975201cbb6c99f64.pngcharacter3.png',
    'https://example.cohttps://th.bing.com/th/id/R.1b1ba9dd3d52d26624a21ded6fcf5c48?rik=7FzBsH2IRSRkaA&pid=ImgRaw&r=0m/southpark/character4.png'
];

// Function to play a sound
function playSound() {
    const audio = new Audio('https://example.com/shttps://pixabay.com/sound-effects/yipee-45360/outhpark/sound.mp3');
    audio.play();
}

// Function to display a random South Park character image
function displayRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const characterImage = document.createElement('img');
    characterImage.src = characters[randomIndex];
    characterImage.alt = 'South Park Character';
    characterImage.className = 'character-image';
    document.body.appendChild(characterImage);
}

// Event listener for the button
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        playSound();
        displayRandomCharacter();
    });
