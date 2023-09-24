import { SERVER_URL } from "../../../../settings.js";

export async function initFindCar() {
  document.getElementById("result").innerText = "";
  document.getElementById("btn-find-car").addEventListener("click", findCar);
}

async function findCar() {
  const resultElement = document.getElementById("result");
  const carId = document.getElementById("car-id").value;

  try {
    const car = await fetch(SERVER_URL + "/" + carId).then((res) => {
      if (!res.ok) {
        throw new Error("Car not found");
      }
      return res.json();
    });
    resultElement.style.color = "black";
    resultElement.innerText = JSON.stringify(car, null, 4);
  } catch (e) {
    resultElement.style.color = "red";
    resultElement.innerText = e.message;
  }
}
