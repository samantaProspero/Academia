const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const inicialColors = {
  bg
}

const changeColors = (colors) => {


}

checkbox.addEventListener("change", ({target}) => {
  target.checked ? changeColors() : changeColors()
})