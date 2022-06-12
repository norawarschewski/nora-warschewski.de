const header = document.querySelector(".page-header");
const headerHeight = header.clientHeight;

const main = document.querySelector("main");
main.style.height = `calc(100vh - ${headerHeight}px)`;
