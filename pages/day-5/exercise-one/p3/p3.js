import { getText } from "../p2/p2.js";

let sharedText = "";

export function initP3() {
  sharedText = getText();
  document.querySelector("#text").innerText = sharedText;
}
