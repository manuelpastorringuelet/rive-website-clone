import "./style.css";

const menuContainer = document.getElementById(
  "menu-container"
) as HTMLDivElement;

const x = document.getElementById("button-hidden-menu") as HTMLAnchorElement;

x.addEventListener("click", () => menuContainer.classList.toggle("hidden"));
