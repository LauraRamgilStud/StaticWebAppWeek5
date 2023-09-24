import { loadHtml, renderHtml } from "../../utils.js";

import { initP2 } from "./exercise-one/p2/p2.js";
import { initP3 } from "./exercise-one/p3/p3.js";

import { initAllCars } from "./exercise-two/getAll/getAll.js";
import { initFindCar } from "./exercise-two/find/find.js";
import { initAddCar } from "./exercise-two/add/add.js";

export async function initDay5() {
  const templateP1 = await loadHtml("./pages/day-5/exercise-one/p1/p1.html");
  const templateP2 = await loadHtml("./pages/day-5/exercise-one/p2/p2.html");
  const templateP3 = await loadHtml("./pages/day-5/exercise-one/p3/p3.html");
  const templateGetAll = await loadHtml(
    "./pages/day-5/exercise-two/getAll/getAll.html"
  );
  const templateFind = await loadHtml(
    "./pages/day-5/exercise-two/find/find.html"
  );
  const templateAdd = await loadHtml("./pages/day-5/exercise-two/add/add.html");
  const templateEdit = await loadHtml(
    "./pages/day-5/exercise-two/edit/edit.html"
  );

  document.getElementById("day5-btns-ex1").onclick = handleButtonClicksDay5Ex1;
  renderHtml(templateP1, "day5-content-ex1");

  document.getElementById("day5-btns-ex2").onclick = handleButtonClicksDay5Ex2;
  renderHtml(templateGetAll, "day5-content-ex2");

  function handleButtonClicksDay5Ex2(evt) {
    const target = evt.target;
    const isMenuBtn =
      target.tagName === "BUTTON" && target.id.startsWith("menu-btn-");
    if (!isMenuBtn) {
      console.log(
        "Not a menu button, Remove this line when you know what is going on here"
      );
      return;
    }
    if (target.id === "menu-btn-ex2-get") {
      renderHtml(templateGetAll, "day5-content-ex2");
      initAllCars();
    }
    if (target.id === "menu-btn-ex2-find") {
      renderHtml(templateFind, "day5-content-ex2");
      initFindCar();
    }
    if (target.id === "menu-btn-ex2-add") {
      renderHtml(templateAdd, "day5-content-ex2");
      initAddCar();
    }
    if (target.id === "menu-btn-ex2-edit") {
      renderHtml(templateEdit, "day5-content-ex2");
      console.log("edit");
    }
  }

  function handleButtonClicksDay5Ex1(evt) {
    const target = evt.target;
    const isMenuBtn =
      target.tagName === "BUTTON" && target.id.startsWith("menu-btn-");
    if (!isMenuBtn) {
      console.log(
        "Not a menu button, Remove this line when you know what is going on here"
      );
      return;
    }
    if (target.id === "menu-btn-ex1-p1") {
      renderHtml(templateP1, "day5-content-ex1");
    }
    if (target.id === "menu-btn-ex1-p2") {
      renderHtml(templateP2, "day5-content-ex1");
      initP2();
    }
    if (target.id === "menu-btn-ex1-p3") {
      renderHtml(templateP3, "day5-content-ex1");
      initP3();
    }
  }
}
