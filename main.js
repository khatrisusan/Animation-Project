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

async function fetchSVG() {
  let response = await fetch("tree.svg");
  let mySvgData = await response.text();
  document.querySelector("#treeSVG").innerHTML = mySvgData;
  //startManipulatingSvg();
}
async function fetchImage() {
  let response = await fetch("image.json");
  let myImage = await response.json();
  prepareImg(myImage);
}
function prepareData(data) {
  console.log(data);
  //forEach
  data.forEach(showSingle);
}
function prepareImg(image) {
  console.log(image);
  //forEach
  image.forEach(singleImg);
}
function showSingle(singleDesc) {
  console.log(singleDesc);

  //cloning template and append to container
  const templateDesc = document.querySelector("template.desc").content;

  //pass true
  const copyDesc = templateDesc.cloneNode("true");

  //change textContent
  copyDesc.querySelector(
    "h3"
  ).innerText = `${singleDesc.Date} - ${singleDesc.Event}`;
  copyDesc.querySelector(".p1").innerText = `${singleDesc.paragraph1}`;

  //Its a bug....it should check if have paragraph2 and if have have to create p and append
  let p2 = document.createElement("p");
  let br = document.createElement("br");
  p2.setAttribute("class", "p2");
  copyDesc.querySelector(".p1").appendChild(br);
  copyDesc.querySelector(".p1").appendChild(p2);
  copyDesc.querySelector(".p2").innerText = `${singleDesc.paragraph2}`;

  //

  //append
  document.querySelector(".descContainer").appendChild(copyDesc);
}
function singleImg(myImg) {
  console.log(myImg);
  const templateIcon = document.querySelector("template.icon").content;
  const copyIcon = templateIcon.cloneNode("true");
  //change src
  const icon = copyIcon.querySelector("img");
  icon.setAttribute("src", `${myImg.link}`);
  icon.setAttribute("alt", `${myImg.name}-img`);
  icon.setAttribute("class", "icon");
  //append
  document.querySelector(".iconContainer").appendChild(copyIcon);
}
/* For CLick eventListener we will clone template.box with down content which is optional structure */
//const templateBox = document.querySelector("template.box").content;
//const copyBox = templateBox.cloneNode("true");
