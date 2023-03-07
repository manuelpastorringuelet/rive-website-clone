import "./style.css";

function myFunction() {
  let x = document.getElementById("bottonnav")!;
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
