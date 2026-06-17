const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionText = document.getElementById('question');
const mainCard = document.getElementById('main-card');
const loadingScreen = document.getElementById('loading-screen');
const progressBar = document.querySelector('.progress-bar');
const finalScene = document.getElementById('final-scene');
const musicBtn = document.getElementById("musicBtn");
const letterMusic = document.getElementById("letterMusic");

let yesScale = 1;
let noClicks = 0;
let isPlaying = false;

const messages = [
    "No", "Are you sure? 🥺", "Priittii pwease?? 🥺👉👈", "u no no lab me na?",
    "plss plssss 💔", "u brik my hart na!", "sige mamaya na?", "awts lods",
    "sigee na kasii", "kiiss kitaaa", "ayyy ayawww", "haha cuteee", "sakiitt mo be"
];

function createBackgroundHearts() {
    const container = document.getElementById('floating-hearts-container');
    if(!container) return;
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('bg-heart');
        heart.innerHTML = Math.random() > 0.5 ? '❤️' : '💖';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.fontSize = `${Math.random() * 15 + 10}px`;
        heart.style.animationDuration = `${Math.random() * 4 + 4}s`;
        
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 8000);
    }, 600);
}
createBackgroundHearts();

const startDate = new Date("2024-03-31T00:00:00"); 

function updateRelationshipCounter() {
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}
setInterval(updateRelationshipCounter, 1000);


document.addEventListener("click", (e) => {

    if (e.target.tagName === 'BUTTON' || e.target.closest('.item')) return;

    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "20px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999999";
    heart.style.transition = "transform 1s ease, opacity 1s ease";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = `translateY(-50px) scale(1.5)`;
        heart.style.opacity = "0";
    }, 10);

    setTimeout(() => heart.remove(), 1000);
});


musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
        letterMusic.play().catch(err => console.log("Audio playback blocked: ", err));
        musicBtn.innerHTML = "🔊";
        musicBtn.classList.add('playing');
        isPlaying = true;
    } else {
        letterMusic.pause();
        musicBtn.innerHTML = "🎵";
        musicBtn.classList.remove('playing');
        isPlaying = false;
    }
});

// Runaway No Button Action
function moveNoButton(e) {
    if(e) e.preventDefault(); 

    noClicks++;
    const messageIndex = Math.min(noClicks, messages.length - 1);
    noBtn.innerText = messages[messageIndex];

    yesScale += 0.25;
    yesBtn.style.transform = `scale(${yesScale})`;

    questionText.style.transform = `translateX(${Math.sin(noClicks) * 8}px)`;
    setTimeout(() => { questionText.style.transform = 'translateX(0)'; }, 100);

    const padding = 30; 
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;
    
    const randomX = Math.max(padding, Math.random() * maxX);
    const randomY = Math.max(padding, Math.random() * maxY);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', moveNoButton);


yesBtn.addEventListener('click', () => {
    questionText.innerText = "I knew you'd say yes! ❤️";
    document.querySelector('.buttons').style.display = 'none';
    
    const gif = document.getElementById('main-gif');
    gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWltdWJsYWRyOWRuaGZsMHRxYnplajZzOXM2NGV0d2NoYjFoeWczciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/X9wZY0FtBmwHCp8QBm/giphy.gif"; 

    for (let i = 0; i < 75; i++) {
        createHeartExplosion();
    }

    setTimeout(() => {
        loadingScreen.classList.add('active');
        progressBar.classList.add('loading');

        setTimeout(() => {
            loadingScreen.classList.remove('active');
            mainCard.style.opacity = '0';
            mainCard.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                mainCard.style.display = 'none';
                finalScene.style.display = 'flex';
                updateRelationshipCounter(); 
                setTimeout(() => { finalScene.style.opacity = '1'; }, 50);
            }, 500);
        }, 2800);
    }, 1500); 
});

function createHeartExplosion() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = Math.random() > 0.5 ? '❤️' : '💖';
    
    const angle = Math.random() * Math.PI * 2;
    const distance = 150 + Math.random() * window.innerWidth * 0.4; 
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    const rotation = Math.random() * 360;
    const scale = Math.random() * 0.8 + 0.6;

    heart.style.setProperty('--x', `${x}px`);
    heart.style.setProperty('--y', `${y}px`);
    heart.style.setProperty('--r', `${rotation}deg`);
    heart.style.setProperty('--s', `${scale}`);
    heart.style.fontSize = `${Math.random() * 15 + 15}px`;

    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 1200);
}

function openLetter() {
    const el = document.getElementById('letter-overlay');
    el.style.display = 'flex';
    setTimeout(() => el.style.opacity = '1', 10);
}

function closeLetter() {
    letterMusic.pause();
    letterMusic.currentTime = 0;
    musicBtn.innerHTML = "🎵";
    musicBtn.classList.remove('playing');
    isPlaying = false;
    
    const el = document.getElementById('letter-overlay');
    el.style.opacity = '0';
    setTimeout(() => el.style.display = 'none', 300);
}

const photoMusic = document.getElementById("photoMusic");

function showPhoto() {

    if (isPlaying) {
        letterMusic.pause();
        musicBtn.innerHTML = "🎵";
        musicBtn.classList.remove('playing');
        isPlaying = false;
    }


    photoMusic.play().catch(err => console.log("Photo music blocked:", err));

    const el = document.getElementById('photo-overlay');
    el.style.display = 'flex';
    setTimeout(() => el.style.opacity = '1', 10);
}

function closePhoto() {

    photoMusic.pause();
    photoMusic.currentTime = 0;

    const el = document.getElementById('photo-overlay');
    el.style.opacity = '0';
    setTimeout(() => el.style.display = 'none', 300);
}
