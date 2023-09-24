import { SERVER_URL } from "../../../../settings.js";

import { makeOptions } from "../../../../utils.js";

export function initAddCar() {
  document.getElementById("btn-add-car").addEventListener("click", addCar);
}

async function addCar() {
  // Get car from form
  const car = {
    model: document.getElementById("car-model").value,
    brand: document.getElementById("car-brand").value,
    pricePrDay: document.getElementById("car-price").value,
    bestDiscount: document.getElementById("car-discount").value,
  };

  const newCar = await fetch(SERVER_URL, makeOptions("POST", car)).then((res) =>
    res.json()
  );

  document.getElementById("new-car").innerText = JSON.stringify(
    newCar,
    null,
    4
  );
}
