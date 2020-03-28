"use strict";
export function cloneDesc(jsonData) {
  //console.log(jsonData);
  prepareDesc(jsonData);
}
function prepareDesc(jsonData) {
  jsonData.forEach(data);
}

function data(detail) {
  console.log(detail);
  const template = document.querySelector(".box").content;
  const copy = template.cloneNode("true");
  copy.querySelector(".shortDesc").innerText = `${detail.short_Description}`;

  document.querySelector(".boxContainer").append(copy);

  document.querySelectorAll(".shortDesc").forEach(function(item, i) {
    item.setAttribute("id", detail.Date);
  });
  let myList = document.querySelectorAll(".shortDesc");
}
var array = [1, 2, 3, 4, 5];
var allDiv = document.querySelectorAll("div");
allDiv.forEach(function(item, i) {
  item.setAttribute("id", array[i]);
});
