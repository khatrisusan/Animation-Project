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
<<<<<<< HEAD
  //forEach
  data.forEach(showSingle);
}
function showSingle(single) {
  console.log(single);
  //cloning template and append to container
  const templateDesc = document.querySelector("template.desc").content;
  const templateBox = document.querySelector("template.box").content;
  const templateIcon = document.querySelector("template.icon").content;
  //pass true
  const copyDesc = templateDesc.cloneNode("true");
  const copyBox = templateBox.cloneNode("true");
  const copyIcon = templateIcon.cloneNode("true");
  //change textContent
  copyDesc.querySelector("h3").innerText = `${single.Date} - ${single.Event}`;
  copyDesc.querySelector(".p1").innerText = `${single.paragraph1}`;

  //Its a bug....it should check if have paragraph2 and if have have to create p and append
  let p2 = document.createElement("p");
  let br = document.createElement("br");
  p2.setAttribute("class", "p2");
  copyDesc.querySelector(".p1").appendChild(br);
  copyDesc.querySelector(".p1").appendChild(p2);
  copyDesc.querySelector(".p2").innerText = `${single.paragraph2}`;

  //

  //append
  document.querySelector(".descContainer").appendChild(copyDesc);
=======
  console.log(myImage);
>>>>>>> d6ecbf042989ba0acf34be5e3d057431cc4f7c55
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
