const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionText = document.getElementById('question');
const mainCard = document.getElementById('main-card');
const loadingScreen = document.getElementById('loading-screen');
const progressBar = document.querySelector('.progress-bar');
const finalScene = document.getElementById('final-scene');

let yesScale = 1;
let noClicks = 0;

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

document.addEventListener("click", (e) => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "20px";
    heart.style.pointerEvents = "none";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1000);
});

const rainContainer = document.getElementById("rain-container");
let rainInterval;

const drop = document.createElement("div");
drop.innerHTML = "🌸";
drop.classList.add("rain-drop");
drop.style.left = Math.random() * 100 + "vw";
drop.style.animationDuration = (Math.random() * 2 + 2) + "s";
rainContainer.appendChild(drop);

setTimeout(() => drop.remove(), 5000);

function stopRain() {
    rainContainer.style.display = "none";
    clearInterval(rainInterval);
    rainContainer.innerHTML = "";
}


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
    const el = document.getElementById('letter-overlay');
    el.style.opacity = '0';
    setTimeout(() => el.style.display = 'none', 300);
}

function showPhoto() {
    const el = document.getElementById('photo-overlay');
    el.style.display = 'flex';
    setTimeout(() => el.style.opacity = '1', 10);
}

function closePhoto() {
    const el = document.getElementById('photo-overlay');
    el.style.opacity = '0';
    setTimeout(() => el.style.display = 'none', 300);
}
