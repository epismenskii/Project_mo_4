const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal_close");
const openBtn = document.querySelector("#btn-get");

let modalOpened = false;
let timerId = null;

const openModal = () => {
    if (modal.style.display === "block") return; // уже открыта
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
};

const openModalOnce = () => {
    if (modalOpened) return;
    modalOpened = true;
    openModal();
    clearTimeout(timerId);
};

const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
};

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

const handleScroll = () => {
    const endOfWindow =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight;
    if (endOfWindow) {
        openModalOnce();
        window.removeEventListener("scroll", handleScroll);
    }
};

window.addEventListener("scroll", handleScroll);

timerId = setTimeout(openModalOnce, 10000);
openBtn.addEventListener("click", openModal);