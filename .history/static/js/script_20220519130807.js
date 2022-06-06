const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const inicialColors = {
  bg: getStyle(html, "--bg"),
  bgPanel: getStyle(html, "--bgPanel"),
  colorHeading: getStyle(html, "--colorHeading"),
  colorText: getStyle(html, "--colorText"),
};
const darkMode = {
  bg: getStyle(html, "--bg"),
  bgPanel: getStyle(html, "--bgPanel"),
  colorHeading: getStyle(html, "--colorHeading"),
  colorText: getStyle(html, "--colorText"),
};

const changeColors = (colors) => {
  console.log(colors);
};

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeColors() : changeColors();
});
