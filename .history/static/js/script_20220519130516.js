const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)

const inicialColors = {
  bg: getStyle(html, "--bg"),
  bg: getStyle(html, "--bg"),
  bg: getStyle(html, "--bg"),
  bg: getStyle(html, "--bg"),
}

const changeColors = (colors) => {


}

checkbox.addEventListener("change", ({target}) => {
  target.checked ? changeColors() : changeColors()
})