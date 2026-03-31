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