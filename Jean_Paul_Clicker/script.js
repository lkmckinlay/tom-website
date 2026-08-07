// Variables
let score = 0;
let spc = 1;
let amountOfFish = 0;
let image = "./assests/w_paul.png"
let num_of_jean = 1



let fishPrice = 50;
const maxUpgrade = 2


const img = document.getElementById('clicker');
const scorediv = document.getElementById('scorediv');
const fishBtn = document. getElementById('fishBtn');
const error = document.getElementById('error');
const pic = document.getElementById("pic");
const doubleBtn = document.getElementById('doubleBtn');
const upgrades = document.getElementById('upgrades');
const rand = document.getElementById('rand');

// Event listeners
img.addEventListener('click', () => {
    increaseScore("none");
     showFloatingText(spc, event.clientX, event.clientY);
});

fishBtn.addEventListener('click', () => {
    MoreFish();
});

doubleBtn.addEventListener('click', () => {
    doubleJean();
})
upgrades.addEventListener('click', () => {
    console.log("yep")
    if(upgrades.style.backgroundImage.includes("mason.jpeg")) {
        increaseScore("mason")
    }
})

rand.addEventListener('click', () => {
    console.log("ryan")
    if(rand.style.backgroundImage.includes("ryan.jpeg")) {
        increaseScore("ryan")
    }
});

// Functions

function removeError () {
    error.innerHTML = "";
}

//Upgrades
function MoreFish () {
    if (amountOfFish <= maxUpgrade) {
    if (score >= fishPrice) {
        spc = spc * 2;
        fishPrice = fishPrice * 2;
        fishBtn.innerHTML = `$${fishPrice}`;
        score = score - 50;
        scorediv.innerHTML = `$${score}`;
        amountOfFish = amountOfFish + 1;
        if (amountOfFish == 1) {
            image = "./assests/jp_with_fish.jpeg"
            const elements = document.querySelectorAll('[id="pic"]');
            elements.forEach(elements => {
                pic.src = image;
              });
        
        } 
        if (amountOfFish - 1 >= maxUpgrade) {
            fishBtn.innerHTML = "MAX";
        }
      }
      else {
        error.innerHTML = "not enough money";
        setTimeout(removeError, 3000);
    }
    }
    else {
        error.innerHTML = "You have reached max upgrades"
        setTimeout(removeError, 3000)
      }

}

function doubleJean () {
    if (score >= 200) {
    loop = num_of_jean
    for (let i = 0; i < loop; i++) {
        const clone = pic.cloneNode(true);
        img.appendChild(clone);
        num_of_jean++;
    }
    score = score - 200;
    scorediv.innerHTML = `$${score}`;
}
    
}


//Score
function increaseScore (peo) {
    if (peo == "mason") {
            score = score + spc * 4;
            scorediv.innerHTML = `$${score}`;
    }
    else if (peo == "ryan") {
        score = score + 10000000000000000000000
        scorediv.innerHTML = `$${score}`;
    }
    else {
    score = score + spc;
    scorediv.innerHTML = `$${score}`;
    }
}


setTimeout(masonFace, Math.floor(Math.random() * (60000 - 1000) + 1000))

function masonFace() {
    upgrades.style.background = "url('./assests/mason.jpeg') no-repeat center/cover";
    setTimeout(() => {
        upgrades.style.background = "palegoldenrod"
    }, 500)
}


function give(amount) {
    score = score + amount;
    scorediv.innerHTML = `$${score}`;
}


function showFloatingText(amount, x, y) {
    const el = document.createElement('div');
    el.className = 'floating-text';
    el.textContent = `+${amount}`;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
}


function RyanFace () {
 rand.style.background = "url('./assests/ryan.jpeg') no-repeat center/cover"
 setTimeout(() => {
        rand.style.background = "white";
    }, 1000)
}

setTimeout(RyanFace, Math.floor(Math.random()* (900000 - 15000)) + 15000)