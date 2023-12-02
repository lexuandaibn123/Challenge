let $ = [...document.getElementsByClassName("number")][0];
let time = [...document.getElementsByClassName("time")][0];
let i = 1;
$.textContent = 30;
const countdown_func = setInterval(() => {
  $.textContent = Math.floor($.textContent * 10 - i * 10) / 10;
  $.style.animation = "none";
  $.offsetHeight;
  $.style.animation = null;
  $.style.animation = "countdown 1s";
  if ($.textContent == 1) i = 0.1;
  if ($.textContent == 0) {
    clearInterval(countdown_func);
    document.body.removeChild(time);
    window.alert(
      `Ủa thầy vẫn chưa thấy cái "Link" bên góc cuối cùng bên phải à?`
    );
  }
}, 1000);

let div_position = [...document.getElementsByClassName("div_position")];
let button = document.createElement("button");
button.style.height = "5vh";
button.style.width = "10vw";
button.style.fontSize = "120%";
button.style.borderRadius = "5px";
button.style.top = `${Math.floor(Math.random() * 45)}vh`;
button.style.left = `${Math.floor(Math.random() * 40)}vw`;
button.style.position = "absolute";
button.textContent = "Next";
button.addEventListener("mouseenter", () => {
  const parent = button.parentNode;
  parent.removeChild(button);
  let x = Math.floor(Math.random() * 3);
  while (div_position[x] == parent) {
    x = Math.floor(Math.random() * 3);
  }
  div_position[x].appendChild(button);
  button.style.top = `${Math.floor(Math.random() * 45)}vh`;
  button.style.left = `${Math.floor(Math.random() * 40)}vw`;
});
div_position[2].appendChild(button);
window.alert(`Wait for the countdown to 0. Or click on the "Next" box.`);
