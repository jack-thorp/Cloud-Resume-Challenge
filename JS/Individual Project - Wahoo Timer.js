/* Setting Key Variable Values */
let timer=null;
let sessionSeconds=60;
let remainingSeconds=60;
let isRunning=false;
let lastDurationVal="1";
let boatName="";
let rocking=false;

/* Capturing DOM Elements*/
const startBtn       = document.getElementById('startBtn');
const timerDisplay   = document.getElementById('timer');
const durationSelect = document.getElementById('durationSelect');
const boatNameInput  = document.getElementById('boatNameInput');
const notesInput     = document.getElementById('notesInput');
const boatTitle      = document.getElementById('boatTitle');
const banner         = document.getElementById('banner');
const catchTableBody = document.querySelector('#catchTable tbody');

/* Image Paths */
const bgImg  = new Image(); bgImg.src  = "images/oceanBackground.png";
const boatImg= new Image(); boatImg.src= "images/boat.png";

/* Populate Boat Name Handler */
boatNameInput.addEventListener('input',e=>{
  boatName=e.target.value.trim();
  if(boatName){
    boatTitle.textContent=boatName;
    boatTitle.style.display='block';
  }else{
    boatTitle.style.display='none';
  }
});

/* Duration Handler */
durationSelect.addEventListener('change',()=>{
  const val=durationSelect.value;
  lastDurationVal=val;
  sessionSeconds=val<1 ? Math.round(parseFloat(val)*60) : parseInt(val)*60;
  remainingSeconds=sessionSeconds;
  timerDisplay.textContent=formatTime(remainingSeconds);
  rocking=false;  // stop rocking if timer not running
});

/* Start/Stop Handler */
startBtn.addEventListener('click',()=>{
    // pause the timer
  if(isRunning){
    clearInterval(timer);timer=null;isRunning=false;rocking=false;
    startBtn.textContent='Start Session';
    return;
  }
  const selVal=durationSelect.value;
    // reset timer if duration changed
  if(selVal!==lastDurationVal){ 
    lastDurationVal=selVal;
    sessionSeconds=selVal<1 ? Math.round(parseFloat(selVal)*60) : parseInt(selVal)*60;
    remainingSeconds=sessionSeconds;
  }
    // start timer
  timer=setInterval(tick,1000);
  isRunning=true;rocking=true;
  startBtn.textContent='End Session';
});

function tick(){
  remainingSeconds--;
  if(remainingSeconds<=0){
    clearInterval(timer);timer=null;isRunning=false;rocking=false;
    timerDisplay.textContent='0:00';
    startBtn.textContent='Start Session';
    showCatch();
    remainingSeconds=sessionSeconds;
  }else{
    timerDisplay.textContent=formatTime(remainingSeconds);
  }
}

function formatTime(sec){
  const m=Math.floor(sec/60);
  const s=String(sec%60).padStart(2,'0');
  return `${m}:${s}`;
}

/* Fish Specs */
const fishTypes = [
  { name: 'Blue Marlin', min: 150, max: 700, img: 'images/fishes/blue marlin.png' },
  { name: 'White Marlin', min: 40, max: 150, img: 'images/fishes/white marlin.png' },
  { name: 'Yellowfin Tuna', min: 30, max: 200, img: 'images/fishes/yellowfin tuna.png' },
  { name: 'Bluefin Tuna', min: 150, max: 700, img: 'images/fishes/bluefin tuna.png' },
  { name: 'Sailfish', min: 40, max: 90, img: 'images/fishes/sailfish.png' },
  { name: 'King Mackerel', min: 10, max: 70, img: 'images/fishes/king mackerel.png' },
  { name: 'Tarpon', min: 60, max: 170, img: 'images/fishes/tarpon.png' },
  { name: 'Red Snapper', min: 5, max: 50, img: 'images/fishes/red snapper.png' },
  { name: 'Spanish Mackerel', min: 2, max: 10, img: 'images/fishes/spanish mackerel.png' },
  { name: 'Redfish', min: 5, max: 60, img: 'images/fishes/redfish.png' },
  { name: 'Wahoo', min: 15, max: 110, img: 'images/fishes/wahoo.png' },
  { name: 'Barracuda', min: 10, max: 50, img: 'images/fishes/barracuda.png' },
  { name: 'Mahi', min: 10, max: 55, img: 'images/fishes/mahi.png' }
];
function showCatch() {
  const f = fishTypes[Math.floor(Math.random() * fishTypes.length)];
  const weight = (Math.random() * (f.max - f.min) + f.min).toFixed(1);
  const who = boatName || 'You';

  banner.innerHTML = `
    <button class="closeBtn" aria-label="Close catch banner">×</button>

    <img 
      class="caughtFishImg" 
      src="${f.img}" 
      alt="${f.name} pixel art"
    >

    <div class="catchMessage">
      ${who} caught a ${weight} lb ${f.name}!
    </div>
  `;

  banner.style.display = 'flex';

  banner.querySelector('.closeBtn').onclick = () => {
    banner.style.display = 'none';
  };

  const notes = notesInput.value.trim();
  notesInput.value = '';

  const row = document.createElement('tr');
  row.innerHTML = `<td>${f.name}</td><td>${weight}</td><td>${notes}</td>`;
  catchTableBody.append(row);
}

/* Image Handler */
const c=document.getElementById('scene');
const ctx=c.getContext('2d');
let boatYOffset=0,boatDir=1;
function draw(){
  ctx.clearRect(0,0,160,120);
  if(bgImg.complete) ctx.drawImage(bgImg,0,0,160,120);
  else { ctx.fillStyle='#68c6ff';ctx.fillRect(0,0,160,120);}  

  if(rocking){
    boatYOffset+=boatDir*0.05;
    if(boatYOffset>0.6||boatYOffset<-0.6) boatDir*=-1;
  }
  if(boatImg.complete){
    const boatW=72,boatH=72;
    ctx.drawImage(boatImg,(160-boatW)/2,60+boatYOffset,boatW,boatH);
  }
  animId=requestAnimationFrame(draw);
}

/* Animation Loop Handler */
let animId=null;
if(!animId) animId=requestAnimationFrame(draw);