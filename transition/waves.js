let links = document.querySelectorAll("li");

let tekstTM = (document.getElementById("mango").style.color = "green");
e = document.querySelector("button");
let knoppieproof = (document.getElementById("fk").style.backgroundColor =
  "pink");
knoppie.addEventListener("click", LOGGEN);

function LOGGEN() {
  return console.log("What is love? Baby don't hurt me");
}

// SVG animatie  scan

let dr1 = document.getElementById("dr1");
let dr2 = document.getElementById("dr2");
let dr3 = document.getElementById("dr3");
let dr4 = document.getElementById("dr4");
let dr5 = document.getElementById("dr5");
let dr6 = document.getElementById("dr6");
let dr7 = document.getElementById("dr7");
let dr8 = document.getElementById("dr8");
let dr9 = document.getElementById("dr9");

dr1.style.opacity = "0.1";
dr2.style.opacity = "0.1";
dr3.style.opacity = "0.4";
dr4.style.opacity = "0.7";
dr5.style.opacity = "1";
dr6.style.opacity = "0.7";
dr7.style.opacity = "0.4";
dr8.style.opacity = "0.1";
dr9.style.opacity = "0.1";

const images = [dr1, dr2, dr3, dr4, dr5, dr6, dr7, dr8, dr9];

// window.addEventListener(open, cl);

function cl() {
  let k = images.length ;
  for (let i; i < k; i++) {
    console.log(opmin(images[i]));
    console.log(opntrl(images[i] + 1));
    console.log(ophigh(images[i] + 2));
    console.log(opfull(images[i] + 3));
  }
}

function opmin(str) {
  return (str.style.opacity = "0.1");
}

function opntrl(str) {
  return (str.style.opacity = "0.4");
}
function ophigh(str) {
  return (str.style.opacity = "0.7");
}
function opfull(str) {
  return (str.style.opacity = "1");
}








