// Array of South Park character images
const characters = [
    'https://example.com/southpark/character1.png',
    'https://example.com/southpark/character2.png',
    'https://example.com/southpark/character3.png',
    'https://example.com/southpark/character4.png'
];

// Function to play a sound
function playSound() {
    const audio = new Audio('https://example.com/southpark/sound.mp3');
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