// SVG animatie  scan

let dr1 = document.getElementById("dr1");
let dr2 = document.getElementById("dr2");
let dr3 = document.getElementById("dr3");

dr1.style.opacity = "0.3";
dr2.style.opacity = "0.5";
dr3.style.opacity = "1";
// dr3.style.margin = "200px";

const images = [dr1, dr2, dr3];

// function scan (){
//   setTimeout((time = setTimeout) => {
//     time = time + 0.1;
//     for (let i = 0; i < Infinity; i++) {
//       setTimeout(() => {
//         console.log("A much needed break.");
//       }, 2000);
//     }
//     console.log("HEYYYYYYY HEYYYYYYYY");
//   }, 500);
// }
let time = 0;
scan();

function scan() {
  time = time + 0.1;
  let mango = (0.6 + time) % 2;
  images[0].style.opacity = mango;
  let banaan = (1.9 + time) % 2;
  images[1].style.opacity = banaan;
  let kiwi = (3.2 + time) % 2;
  images[2].style.opacity = kiwi;

  setTimeout(scan, 80);
}

// loop : function()
// {
//   ...a
//   setTimeout(loop, 100);
// }

// function cl() {
//   let k = images.length;
//   for (let i; i < k; i++) {
//     console.log(opmin(images[i]));
//     console.log(opntrl(images[i] + 1));
//     console.log(ophigh(images[i] + 2));
//     console.log(opfull(images[i] + 3));
//   }
// }

// function opmin(str) {
//   return (str.style.opacity = "0.1");
// }

// function opntrl(str) {
//   return (str.style.opacity = "0.4");
// }
// function ophigh(str) {
//   return (str.style.opacity = "0.7");
// }
// function opfull(str) {
//   return (str.style.opacity = "1");
// }
