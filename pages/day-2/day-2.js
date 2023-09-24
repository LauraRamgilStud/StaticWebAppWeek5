export function initDay2() {
  //Day Two Exercise One

  // Get list of divs
  const divList = document.querySelectorAll(".ex-one");
  // Get the button element for changing the colors
  const buttonColor = document.getElementById("btn-color-change");

  // Function for generating a random value (help from ChatGPT)
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Assign a color to each div
  divList.forEach((div) => {
    div.style.backgroundColor = "blue";
  });

  // Add event on button for color change
  buttonColor.addEventListener("click", function () {
    divList.forEach((div) => {
      let color = getRandomColor();
      div.style.backgroundColor = color;
    });
  });

  /* ##########################################*/
  //  Get all exercise 'links' and sections
  const exLinks = document.querySelectorAll(".ex-link");
  const exSections = document.querySelectorAll(".ex-section");

  // Hide all section initially
  exSections.forEach((section) => {
    section.style.display = "none";
  });

  // Add an event to the links
  const allLinks = document.querySelector("#ex-list");

  allLinks.addEventListener("click", showSection);

  function showSection(evt) {
    let linkId = evt.target.id;
    let sectionId = "exercise-" + linkId;
    console.log(sectionId);
    exSections.forEach((section) => {
      if (section.getAttribute("id").match(sectionId)) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  }

  /*##########################################################*/
  //Day Two Exercise Two
  const outerDiv = document.querySelector("#outer");

  outerDiv.addEventListener("click", function (evt) {
    const divId = evt.target.id;
    document.querySelector("#id-text").innerText = divId;
  });

  /* #########################################################*/
  //  Day Two Exercise Three
  // Later this will come from a server-API
  /*   const names = ["Lars", "Peter", "Jan", "Lise", "Janne"];
  const btnExThree = document.getElementById("initialize-btn");

  btnExThree.addEventListener("click", function () {
    const list = names.map((name) => `<li>${name}</li>`).join("");
    document.getElementById("ul1").innerHTML = list;
  }); */
}
