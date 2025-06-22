const button = document.getElementById("clickButton");
const container = document.getElementById("my-container");

button.addEventListener("click", () => {
  const el = document.createElement("h4");
  el.innerText = "Nitesh";
  container.appendChild(el);
});
