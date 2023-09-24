import { SERVER_URL } from "../../../../settings.js";

// En async function returnere et promise
export async function initAllCars() {
  console.log("initAllCars");

  const cars = await getCars();
  const listItemsStr = cars
    .map((car) => `<li>${car.model} , ${car.brand}</li>`)
    .join("");
  document.getElementById("cars-ul").innerHTML = listItemsStr;
}

// Dette returnere et promise og ikke et cars array
async function getCars() {
  return await fetch(SERVER_URL).then((res) => res.json());
}
