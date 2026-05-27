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
    
    bg.classList.add('clear');
    document.getElementById('question').innerText = "I knew you'd say yes! ❤️";
    document.querySelector('.buttons').style.display = 'none';
    
    const gif = document.getElementById('main-gif');
    gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWltdWJsYWRyOWRuaGZsMHRxYnplajZzOXM2NGV0d2NoYjFoeWczciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/X9wZY0FtBmwHCp8QBm/giphy.gif"; 

    for (let i = 0; i < 100; i++) {
        createHeartExplosion();
    }


    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        loader.style.display = 'block';


        setTimeout(() => {
            loader.style.display = 'none';
            document.querySelector('.card').style.display = 'none';

            document.getElementById('final-scene').style.display = 'flex';
        }, 3000);
    }, 500); 
});

function openLetter() {
    alert("hi mahal as you reading this message, you probably gonna look at me like girl you did this? but heack yah, i tried to be as poetically as possible but my goofy ass you more cant. Anyway i would like to express the highest form of gratitude for my beloved wife with 3 healthy kids, as i writing this down i cant think of how much lucky i am to have you, alam mo naman po na im super duper tawsan milyon bilyon trilyon grateful to have you in this fucked up world, paano ba mag long misig hindi ako marunong i kinda think this is nonsense talk of me but anyway this message is only for expressing how much im happi to hab you as my everything, thank you mahal for giving love i was looking for, i write this down and u are sleeping na i constantly looking at your sleepy eyes kasi it so beautiful and calming hihi. i love you so much mahal im happy to be your Valentine this year and for the next next next year and forever kitang iaask to be your Valentine nyaha pangit sulat ko pero dahan dahan to kasi para maganda at ridibul ehe. I sill remember the first time we kissed, so innocent, warm, wonderful, and a bit awkward kasi hindi ako marunong. i never felt that one before and it so special kasi i get it from you (the long time girl I've been waiting for) in that very moment lovie i just closed my eyes and feel your touch, as u kissing me i felt butterflies for the first time and it so so so so calming, it's so genuine and pure. i'll forever be grateful on how u hold my face, my hands, my arms, and how u embrace yourself with me, your kisses, your reassuring words, your warm breath, and the softness of your hands makes think how much lucky i am in this world. Happy valentines mahal, nawawalan na ako ng mga words na sasabihin hihi all i can think and feel is im happy to have you, im happy to be your boyfriend well not yet but i will keep on pursuing you even if sagutin mona ako or magkaanak na tayo whatsoever, hindi ron matatapos yung pang liligaw ko sa'yo, hindi lang hanggang duon but rather i will continue it until my last breath. Im sorry too lovie, for the things na i did hurt you, things na i dont know na it hurts you, things na hindi ko naipaparamdam, things a hindi ko nagagawa kasi im here malayo, things na hindi mo maranasan as normal couple kasi hindi tayo magkatabi, but the thing is thank you kasi you understand my struggles and you let me grow and become matured to know many things na hindi ko alam na need ganito pala, kailangan ganito ganiyan. Thank you mahal, first for loving me endlessly even na im not that perfect you still give the purest and genuine love i could ever feel, second for guiding me towards my success, the lesson u said, the pagsesermon na palagi kong tinatandaan not to be bad but to make it as lesson, third but not the last is that you making me feel so alive ever than before, your prescence, your touch, and your kindness make me the luckiest person in this world. I love you so much love, mahal na mahal kita higit pa sa inaakala mo, i cant wait to live in the same house with you and fulfilling all your dreams kasi all your dreams become my number 1 priority kasi lablab kita hihi. Take care always mahal, im so proud of you my baby big girly, if u think they hate you we hate them the most, if you think no one love you just look at me im here standing looking at you like in the midst of the crowd. I will always look for you, proud for you, take care for you, and love you wholeheartedly no matter what happens ❤, I love you mahal.");
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
