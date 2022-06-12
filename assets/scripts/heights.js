const header = document.querySelector(".page-header");
const headerHeight = header.clientHeight;

const fullHeightEl = document.querySelector("#full-height");
fullHeightEl.style.height = `calc(100vh - ${headerHeight}px)`;
