"use strict";
let svgPath = document.querySelector("#treeSVG");
window.addEventListener("DOMContentLoaded", init);
function init() {
  console.log("ready");
  fetchTimeline();
  fetchSVG();
  fetchImage();
}
async function fetchTimeline() {
  const response = await fetch("timeline.json");
  const jsonData = await response.json();
  prepareData(jsonData);
}
function prepareData(data, myImage) {
  console.log(data);
  console.log(myImage);
}
async function fetchSVG() {
  let response = await fetch("tree.svg");
  let mySvgData = await response.text();
  document.querySelector("#treeSVG").innerHTML = mySvgData;
  //startManipulatingSvg();
}
async function fetchImage() {
  let response = await fetch("image.json");
  let myImage = await response.json();
  prepareData(myImage);
}
