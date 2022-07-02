const header = document.querySelector(".page-header");
const fullHeightEl = document.querySelector("#full-height");

calcElHeight();

window.addEventListener("resize", calcElHeight);

function calcElHeight() {
    const viewPortWidth = document.documentElement.clientWidth;
    if (viewPortWidth > 768) {
        const headerHeight = header.clientHeight;

        fullHeightEl.classList.add("full-height");
        fullHeightEl.style.setProperty("--header-height", `${headerHeight}px`);

        console.log(fullHeightEl.style.getPropertyValue("--header-height"));
    } else {
        fullHeightEl.classList.remove("full-height");
    }
}
