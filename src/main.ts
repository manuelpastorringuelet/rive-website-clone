import "./style.css";

const menuContainer = document.getElementById(
  "menu-container"
) as HTMLDivElement;

const dropMenuButton = document.getElementById(
  "drop-menu"
) as HTMLAnchorElement;

dropMenuButton.addEventListener("click", () => {
  menuContainer.classList.toggle("hidden");

  const icons = document.querySelectorAll("#drop-menu svg");

  icons.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});

const subMenuContainer = document.getElementById(
  "sub-menu-container"
) as HTMLDivElement;

const subMenuButton = document.getElementById(
  "drop-submenu"
) as HTMLAnchorElement;

subMenuButton.addEventListener("click", () => {
  subMenuContainer.classList.toggle("hidden");
  subMenuButton.classList.toggle("text-white");
});
