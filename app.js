const root = document.documentElement;
const btn = document.getElementById("change");
const text = document.getElementById("color");
const generator = () => {
  newColor = `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
  if (newColor.length < 7) {
    generator();
  }
};
btn.addEventListener("click", () => {
  generator();
  root.style.setProperty("--back-clr", newColor);
  text.textContent = newColor;
});
