"use strict";
import "@babel/polyfill";
import { clickEventFunc } from "./modules/description";
import { cloneDesc } from "./modules/detail";

//import { manipulatingSvg } from "./modules/svg";
import { gsap } from "gsap";

import { eventFunc } from "./modules/event";

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
  cloneDesc(jsonData);
}

async function fetchSVG() {
  const response = await fetch("tree.svg");
  const mySvgData = await response.text();
  document.querySelector("#treeSVG").innerHTML = mySvgData;
  //startManipulatingSvg();
  clickEventFunc(mySvgData);
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
  // clickCallBack(data);
}
function prepareImg(image) {
  //console.log(image);
  //forEach
  image.forEach(singleImg);
}
function showSingle(singleDesc) {
  //console.log(singleDesc);

  //cloning template and append to container
  const templateDesc = document.querySelector("template.desc").content;

  //pass true
  const copyDesc = templateDesc.cloneNode("true");

  //change textContent
  copyDesc.querySelector("h3").innerText = `${singleDesc.Date} - ${singleDesc.Event}`;
  copyDesc.querySelector(".p1").innerText = `${singleDesc.paragraph1}`;

  //if paragraph2 exists make paragraph2 and append
  if (singleDesc.paragraph2) {
    let p2 = document.createElement("p");
    let br = document.createElement("br");
    p2.setAttribute("class", "p2");
    copyDesc.querySelector(".p1").after(p2);
    copyDesc.querySelector(".p2").innerText = `${singleDesc.paragraph2}`;
  }
  //

  //append
  document.querySelector(".descContainer").appendChild(copyDesc);
}
function singleImg(myImg) {
  //console.log(myImg);
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

const templateBox = document.querySelector("template.box").content;
const copyBox = templateBox.cloneNode("true");
