"use strict";
let svgPath = document.querySelector("#treeSVG");
window.addEventListener("DOMContentLoaded", init);
function init() {
  console.log("ready");
  fetchTimeline();
  fetchSVG();
}
async function fetchTimeline() {
  const response = await fetch("timeline.json");
  const jsonData = await response.json();
  prepareData(jsonData);
}
function prepareData(data) {
  console.log(data);
}
async function fetchSVG() {
  let response = await fetch("tree.svg");
  let mySvgData = await response.text();
  document.querySelector("#treeSVG").innerHTML = mySvgData;
  //startManipulatingSvg();
}
