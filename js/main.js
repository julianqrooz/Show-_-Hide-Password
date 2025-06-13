let input = document.getElementById("input");
let eyeshow = document.getElementById("eyeshow");
let eyehid = document.getElementById("eyehid");

input.onkeyup = function () {
  if (input.value !== "") {
    input.setAttribute("type", "password");
    eyehid.style.display = "block";
  } else {
    eyehid.style.display = "none";
    eyeshow.style.display = "none";
  }
};
eyehid.onclick = function () {
  eyehid.style.display = "none";
  input.setAttribute("type", "text");
  eyeshow.style.display = "block";
};
eyeshow.onclick = function () {
  eyeshow.style.display = "none";
  input.setAttribute("type", "password");
  eyehid.style.display = "block";
};
