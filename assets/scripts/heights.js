const header = document.querySelector(".page-header");
const fullHeightEl = document.querySelector("#full-height");

window.addEventListener("resize", function () {
    const headerHeight = header.clientHeight;

    fullHeightEl.style.minHeight = `calc(100vh - ${headerHeight}px)`;
});
