"use strict";
import "@babel/polyfill";
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
}

async function fetchSVG() {
  let response = await fetch("tree.svg");
  let mySvgData = await response.text();
  document.querySelector("#treeSVG").innerHTML = mySvgData;
  //startManipulatingSvg();
  clickEventFunc();
}
async function fetchImage() {
  let response = await fetch("image.json");
  let myImage = await response.json();
  prepareImg(myImage);
}
function prepareData(data) {
  //console.log(data);
  //forEach
  data.forEach(showSingle);
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
  copyDesc.querySelector(
    "h3"
  ).innerText = `${singleDesc.Date} - ${singleDesc.Event}`;
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
//const templateBox = document.querySelector("template.box").content;
//const copyBox = templateBox.cloneNode("true");
function clickEventFunc() {
  const mySvg = document.querySelector("#treeSVG");
  const stem = document.querySelector(".st3");
  const leaf1 = document.querySelector("#l1");
  const leaf2 = document.querySelector("#r1");
  const leaf3 = document.querySelector("#l2");
  const leaf4 = document.querySelector(".st5");
  leaf4.setAttribute("id", "r2");
  const leaf5 = document.querySelector(".st7");
  leaf5.setAttribute("id", "top-leaf");
  let leafArray = [leaf1, leaf2, leaf3, leaf4, leaf5];
  for (let i = 0; i < leafArray.length; i++) {
    //setColor
    leafArray[i].style.fill = "green";
    stem.style.display = "none";
    leafArray[i].style.display = "none";
    document.querySelector("#Layer_1").style.fill = "transparent";
    document.querySelectorAll("polygon").forEach(element => {
      element.style.fill = "transparent";
      //console.log(element);
    });
    document.querySelectorAll(".st6").forEach(element => {
      element.style.stroke = "transparent";
      //console.log(element);
    });
    gsap.to("#Layer_1", { display: "block" }, 0.4);
    gsap.to("#treeSVG", { scale: 5 }, 0);
    gsap.to(stem, { display: "block" }, 0.5);
    gsap.to(leaf1, { display: "block" }, 1);
    leaf1.style.fill = "green";
    gsap.to(leaf2, { display: "block" }, 1.5);
    gsap.to(leaf3, { display: "block" }, 2.0);
    leaf3.style.fill = "green";
    gsap.to(leaf4, { display: "block" }, 2.5);
    gsap.to(leaf5, { display: "block" }, 3.0);
    leafArray[i].addEventListener("click", clickCallBack);
  }
  function clickCallBack(evt) {
    //here we will fetch template
    console.log(this.id || "noID");
  }
}
