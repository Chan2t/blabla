const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const bg = document.getElementById('full-bg');
const questionText = document.getElementById('question');

let yesSize = 1;
let noClicks = 0;

const messages = [
    "No", "are you sure?", "priittii pwease?? 🥺", "u no no lab me na?",
    "plss plssss💔", "u brik my hart na!", "sige mamaya na?", "awts lods",
    "sigee na kasii", "kiiss kitaaa", "ayyy ayawww", "haha cuteee", "sakiitt mo be",
];

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    yesSize += 0.3;
    yesBtn.style.transform = `scale(${yesSize})`;

    noClicks++;
    const messageIndex = Math.min(noClicks, messages.length - 1);
    noBtn.innerText = messages[messageIndex];
    questionText.style.transform = `translateX(${Math.sin(noClicks) * 5}px)`;
});

yesBtn.addEventListener('click', () => {
    // 1. Start Celebration
    bg.classList.add('clear');
    document.getElementById('question').innerText = "I knew you'd say yes! ❤️";
    document.querySelector('.buttons').style.display = 'none';
    
    const gif = document.getElementById('main-gif');
    gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWltdWJsYWRyOWRuaGZsMHRxYnplajZzOXM2NGV0d2NoYjFoeWczciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/X9wZY0FtBmwHCp8QBm/giphy.gif"; 

    for (let i = 0; i < 100; i++) {
        createHeartExplosion();
    }

    // 2. Show the "Top Notification" (Card stays visible)
    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        loader.style.display = 'block';

        // 3. Move to Final Scene (Background stays, Card disappears)
        setTimeout(() => {
            loader.style.display = 'none';
            document.querySelector('.card').style.display = 'none';
            // We do NOT hide #full-bg here so it stays in the background
            document.getElementById('final-scene').style.display = 'flex';
        }, 3000);
    }, 500); 
});

function openLetter() {
    alert("Insert your love letter text here!");
}

function showPhoto() {
    document.getElementById('photo-overlay').style.display = 'flex';
}

function createHeartExplosion() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    const angle = Math.random() * Math.PI * 2;
    const distance = 500 + Math.random() * 300; 
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const rotation = Math.random() * 360;

    heart.style.setProperty('--x', `${x}px`);
    heart.style.setProperty('--y', `${y}px`);
    heart.style.setProperty('--r', `${rotation}deg`);
    heart.style.fontSize = `${Math.random() * 20 + 15}px`;
    heart.style.animationDelay = `${Math.random() * 0.2}s`;

    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 1500);
}
