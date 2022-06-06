const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) => window.getComputedStyle(html).proper

const inicialColors = {
  bg: window.getComputedStyle
}

const changeColors = (colors) => {


}

checkbox.addEventListener("change", ({target}) => {
  target.checked ? changeColors() : changeColors()
})