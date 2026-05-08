const button = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu a");

button.addEventListener("click", () => {
  menu.classList.toggle("show");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});
