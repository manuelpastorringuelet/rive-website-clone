import "./style.css";

let x = document.getElementById("menu-container")!;

function myFunction() {
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  console.log("hi");
}

x.addEventListener("click", myFunction);

/* const x = document.getElementById("menu-container")!;

function myFunction() {
  document.querySelector("html")?.classList.toggle("flex");
  console.log("hi");
}

x.onclick = myFunction; */

/* const themeTogglerRef = document.getElementById("theme-toggler")!;

function handleClick() {
  document.querySelector("html")?.classList.toggle("dark");
}

themeTogglerRef.onclick = handleClick; */
