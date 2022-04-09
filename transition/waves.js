// SVG animatie  scan

let dr1 = document.getElementById("dr1");
let dr2 = document.getElementById("dr2");
let dr3 = document.getElementById("dr3");

dr1.style.opacity = "0.2";
dr2.style.opacity = "0.4";
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
  time = time + 0.06;
  let speed = 1;
  let kr1 = time % speed; //0...1
  let kr2 = (time - 0.2) % speed;
  let kr3 = (time - 0.4) % speed;

  kr1 = kr1 * 2; //0...2
  kr1 = kr1 - 1; //-1 ... 1
  if (kr1 < 0) {
    kr1 = -kr1; //1..0
  } else {
    // 0 ..1
  }
  //0 - 1 - 0
  images[0].style.opacity = kr1;
  kr2 = kr2 * 2; //0...2
  kr2 = kr2 - 1; //-1 ... 1
  if (kr2 < 0) {
    kr2 = -kr2; //1..0
  } else {
    // 0 ..1
  }
  images[1].style.opacity = kr2;
  kr3 = kr3 * 2; //0...2
  kr3 = kr3 - 1; //-1 ... 1
  if (kr3 < 0) {
    kr3 = -kr3; //1..0
  } else {
    // 0 ..1
  }
  images[2].style.opacity = kr3;

  setTimeout(scan, 60);
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
