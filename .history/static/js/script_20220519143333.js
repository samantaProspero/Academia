const html = document.querySelector("html");
const checkbox = document.getElementById("switch-shadow");

checkbox.addEventListener("change", () => {
  console.log("mudou");
  html.classList.toggle("dark-mode");
});
