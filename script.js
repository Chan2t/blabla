const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const bg = document.getElementById('full-bg');

yesBtn.addEventListener('click', () => {
    bg.classList.add('clear');
    document.getElementById('question').innerText = "I knew you'd say yes! ❤️";
    document.querySelector('.buttons').style.display = 'none';
});

noBtn.addEventListener('mouseover', () => {
    // This math ensures the button stays within the visible screen area
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});