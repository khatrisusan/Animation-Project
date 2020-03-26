// let position = 0;

// const speed = 200; // px pr second
// const framerate = 60; // frames pr seconed

// let last;
// export async function svg() {
//   const response = await fetch("tree.svg");
//   const mySvgData = await response.text();
//   document.querySelector("#treeSVG").innerHTML = mySvgData;
//   const now = performance.now();
//   const delta = now - last || 0;
//   console.log(now);
//   position += speed / (1000 / delta);

//   if (position > 400) {
//     position = 0;
//   }
//   mySvgData.style.transform = `translateX(${position}400)`;
//   requestAnimationFrame(startManipulatingSvg);

//   //startManipulatingSvg(svg);
// }

// svg();
const svg = document.querySelector("#treeSVG");

let position = 0;
// speed = 600px pr second
// framerate = 100 frames per second
// move/ change = speed / framerate
const speed = 200; // px per second
const framerate = 60; // frames per second

let last;

export function manipulatingSvg() {
  const now = performance.now();
  const delta = now - last || 0;
  last = now;

  position += speed / (1000 / delta);
  if (position > 600) {
    position = 0;
  }
  svg.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(manipulatingSvg);
}
manipulatingSvg();
