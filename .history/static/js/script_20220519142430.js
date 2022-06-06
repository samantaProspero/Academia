const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

checkbox.addEventListener("change", () => {
  console.log("mudou");
  html.classList.toggle("dark-mode");
});
