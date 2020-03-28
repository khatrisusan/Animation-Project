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

  document.querySelector(".boxContainer").appendChild(copy);
}
