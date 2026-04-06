const tabBlock = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");
const tabItems = document.querySelector(".tab_content_items");

const toggleBlock = (index = 0) => {
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

let currentIndex = 0;
let seconds = null;

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

