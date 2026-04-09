const gmailInput = document.querySelector("#gmail_input")
const gmailCheckBtn = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;

gmailCheckBtn.addEventListener("click", () => {
    if(regex.test(gmailInput.value)){
        gmailResult.style.color = "green";
        gmailResult.innerHTML =  `${gmailInput.value} is valid`
    }else{
        gmailResult.style.color = "red";
        gmailResult.innerHTML =  `${gmailInput.value} is not valid, write pls your gmail`
    }
})


const innerBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector(".parent_block")

let left = 0; topY = 0; 

const move = () => {
    const moveX = parentBlock.clientWidth - innerBlock.clientWidth;
    const moveY = parentBlock.clientHeight - innerBlock.clientHeight;

    if (left < moveX && topY == 0) {
        innerBlock.style.left = `${left}px`;
        left++;
    }else if (left >= moveX && topY <= moveY){
        innerBlock.style.top = `${topY}px`;
        topY++;
    }else if (topY >= moveY && left > 0){
        innerBlock.style.left = `${left}px`;
        left--;
    }else if (left <= moveX && topY > 0){
        innerBlock.style.top = `${topY}px`;
        topY--;
    }
    requestAnimationFrame(move)
}

move()

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const timeElement = document.querySelector("#seconds");

let seconds = 0;
let interval = null;

startBtn.addEventListener('click', () => {
   if(interval !== null) return;
   interval = setInterval(() => {
    seconds++
    timeElement.textContent = seconds
   }, 1000)
})

stopBtn.addEventListener('click', () => {
    clearInterval(interval)
    interval = null;
})
resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    timeElement.textContent = 0;
})

// 4th homework

const aboutMe = new XMLHttpRequest();
aboutMe.open("GET", "../data/bio.json");
aboutMe.setRequestHeader("Content-Type", "application/json");
aboutMe.send()
aboutMe.onload = () => {
    console.log(aboutMe.response);
}

const DEFAULT_IMG = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

const actCards = document.querySelector(".characters-list")

const actors = new XMLHttpRequest();
actors.open("GET", "../data/characters.json");
actors.setRequestHeader("Content-Type", "application/json");
actors.send()
actors.onload = () => {
    
    const parsing = JSON.parse(actors.response)

    parsing.forEach((actor) => {
        const card = document.createElement("div");
        card.classList.add("character-card");
        card.innerHTML = 
        `<div class = "character-photo"> 
            <img src="${actor.photo ?? DEFAULT_IMG}" alt="${actor.name}">
        </div>
        <p class = "character-name">${actor.name}</p>
        <p class = "character-age">Age: ${actor.age}</p>
        `
        actCards.appendChild(card);
        
    })
    
}