const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");


checkbox.addEventListener("change", () => {
  html.classList.toggle('dark-mode')
  console.log("mudou")
});
