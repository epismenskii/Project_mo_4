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

let position = 0;
const move = () => {
    const parentWidth = parentBlock.clientWidth;
    const childWidth = innerBlock.clientWidth;

    if (position <= parentWidth - childWidth) {
        innerBlock.style.left = `${position}px`;
        position++;

        requestAnimationFrame(move)
    }
}

move()