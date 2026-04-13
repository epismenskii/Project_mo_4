const tabBlock = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");
const tabItems = document.querySelector(".tab_content_items");

let currentIndex = 0;
let seconds = null;

const toggleBlock = (index = 0) => {
    currentIndex = index;
    tabBlock.forEach((block, i) => block.classList.toggle("active", i === index));
    tabs.forEach((tab, i) => tab.classList.toggle("active", i === index));
}

toggleBlock()

tabItems.addEventListener("click", (event) => {
    const clickedTab = event.target.closest(".tab_content_item");
    if(!clickedTab) return;

    const index = [...tabs].indexOf(clickedTab);
    toggleBlock(index)
    
})

const slider = () => {
   seconds = setInterval(() => {
    currentIndex++
    if (currentIndex >= tabs.length) {
            currentIndex = 0;
        }
        toggleBlock(currentIndex)
}, 4000)
}

slider()

// lesson/dz 5

const somInput = document.querySelector("#som")
const usdInput = document.querySelector("#usd")
const euroInput = document.querySelector("#eur")
const error = document.querySelector("#error")

const converter = (element, usdElement, eurElement) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send();
        request.onload = () => {
            if(request.status >= 200 && request.status < 300){
                const data = JSON.parse(request.response);
                const usdValue = data.usd;
                const eurValue = data.euro;

                if(element.value === ''){
                usdElement.value = '';
                eurElement.value = '';
                return;
                }
                if(element.id === 'som'){
                    usdElement.value = (element.value / usdValue).toFixed(2);
                    eurElement.value = (element.value / eurValue).toFixed(2);
                }else if(element.id === 'usd'){
                    usdElement.value = (element.value * usdValue).toFixed(2);
                    eurElement.value = ((element.value / eurValue) * usdValue).toFixed(2)
                }else if(element.id === 'eur'){
                    usdElement.value = (element.value * eurValue).toFixed(2)
                    eurElement.value = ((element.value * eurValue) / usdValue).toFixed(2)
                }
            }
                else{
                error.style.color = "red";
                error.style.fontSize = "24px";
                error.innerHTML = "Прооизошла ошибка на сервере";
                return;
            }

        }
    } 
}

converter(somInput, usdInput, euroInput)
converter(usdInput, somInput, euroInput)
converter(euroInput, somInput, usdInput)