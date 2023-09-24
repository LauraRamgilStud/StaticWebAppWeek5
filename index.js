import { loadHtml, renderHtml } from "./utils.js";

import { initDay1 } from "./pages/day-1/day-1.js";
import { initDay2 } from "./pages/day-2/day-2.js";
import { initDay3 } from "./pages/day-3/day-3.js";
import { initDay4 } from "./pages/day-4/day-4.js";
import { initDay5 } from "./pages/day-5/day-5.js";

window.addEventListener("load", async () => {
  const templateDay1 = await loadHtml("./pages/day-1/day-1.html");
  const templateDay2 = await loadHtml("./pages/day-2/day-2.html");
  const templateDay3 = await loadHtml("./pages/day-3/day-3.html");
  const templateDay4 = await loadHtml("./pages/day-4/day-4.html");
  const templateDay5 = await loadHtml("./pages/day-5/day-5.html");

  document.getElementById("day-btns").onclick = handleButtonClicks;
  renderHtml(templateDay1, "content");

  function handleButtonClicks(evt) {
    const target = evt.target;
    const isMenuBtn =
      target.tagName === "BUTTON" && target.id.startsWith("menu-btn-");
    if (!isMenuBtn) {
      console.log(
        "Not a menu button, Remove this line when you know what is going on here"
      );
      return;
    }
    if (target.id === "menu-btn-day1") {
      renderHtml(templateDay1, "content");
      initDay1();
    }
    if (target.id === "menu-btn-day2") {
      renderHtml(templateDay2, "content");
      initDay2();
    }
    if (target.id === "menu-btn-day3") {
      renderHtml(templateDay3, "content");
      initDay3();
    }
    if (target.id === "menu-btn-day4") {
      renderHtml(templateDay4, "content");
      initDay4();
    }
    if (target.id === "menu-btn-day5") {
      renderHtml(templateDay5, "content");
      initDay5();
    }
  }
});
