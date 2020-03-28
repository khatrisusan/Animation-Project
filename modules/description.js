// const tree = document.querySelector("#treeSVG");

// export function fetchDesc() {
//   //console.log(tree);
//   document.querySelector("h1").innerText = "Hello There!";
//   tree.style.width = "20ox";
// }
// fetchDesc();
import { gsap } from "gsap";
export function clickEventFunc(mySvgData) {
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
  function clickCallBack(jsonData) {
    //here we will fetch template
    console.log(this.id || "noID");
    if (this.id === "l1") {
      console.log("Should fetch 1996's data");
      console.log(jsonData);
    } else if (this.id === "r1") {
      console.log("Should fetch 1998's data");
    } else if (this.id === "l2") {
      console.log("Should fetch 2001's data");
    } else if (this.id === "r2") {
      console.log("Should fetch 2007's data");
    } else {
      console.log("Should fetch 2010's data");
    }
  }
}
