const header = document.querySelector(".page-header");
const fullHeightEl = document.querySelector("#full-height");

calcElHeight();

window.addEventListener("resize", calcElHeight);

function calcElHeight() {
    const headerHeight = header.clientHeight;

    fullHeightEl.style.minHeight = `calc(100vh - ${headerHeight}px)`;
}
