// SVG animatie  scan

let dr1 = document.getElementById("dr1");
let dr2 = document.getElementById("dr2");
let dr3 = document.getElementById("dr3");


let blok1 = document.getElementById("blok1");
let blok2 = document.getElementById("blok2");
let blok3 = document.getElementById("blok3");


dr1.style.opacity = "0.2";
dr2.style.opacity = "0.4";
dr3.style.opacity = "1";


const images = [dr1, dr2, dr3];


let time = 0;
scan();

function scan() {
  time = time + 0.06;
  let speed = 1.8;
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

  images[0].style.opacity = kr1;
  // images[0].style.width = kr1 * 10;

  kr2 = kr2 * 2; //0...2
  kr2 = kr2 - 1; //-1 ... 1
  if (kr2 < 0) {
    kr2 = -kr2; //1..0
  } else {
    // 0 ..1
  }
  images[1].style.opacity = kr2;
  // images[1].style.width = kr1 * 20;

  kr3 = kr3 * 2;
  kr3 = kr3 - 1;
  if (kr3 < 0) {
    kr3 = -kr3;
  } else {
  }
  images[2].style.opacity = kr3;
  // images[2].style.width = kr3 * 30;

  setTimeout(scan, 60);
}





// HIER BEGIN IK AAN WIDTH THE VERANDEREN

size();
function size() {
  time = time + 0.06;
  let speed = 1.8;
  let blok1 = time % speed; //0...1
  let blok2 = (time - 0.2) % speed;
  let blok3 = (time - 0.4) % speed;

  blok1 = blok1 * 2; //0...2
  blok1 = blok1 - 1; //-1 ... 1
  if (blok1 < 0) {
    blok1 = -blok1; //1..0
  } else {
    // 0 ..1
  }

  images[0].style.width = blok1 * 300;
  // images[0].style.width = kr1 * 10;

  kr2 = kr2 * 2; //0...2
  kr2 = kr2 - 1; //-1 ... 1
  if (kr2 < 0) {
    kr2 = -kr2; //1..0
  } else {
    // 0 ..1
  }
  images[1].style.opacity = kr2;
  // images[1].style.width = kr1 * 20;

  kr3 = kr3 * 2;
  kr3 = kr3 - 1;
  if (kr3 < 0) {
    kr3 = -kr3;
  } else {
  }
  images[2].style.opacity = kr3;
  // images[2].style.width = kr3 * 30;

  setTimeout(size, 60);
}

