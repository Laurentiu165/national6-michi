console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "/";
});

let breeds = document.getElementById("breeds");

function getData() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((r) => r.json())
    .then(useJSONResponse);
}

function useJSONResponse(json) {
  let allBreedName = Object.values(json);
  console.log(allBreedName[0]);
  let allBreedNameArray = Object.keys(allBreedName[0]);
  console.log(allBreedNameArray);
  renderBreeds(allBreedNameArray);
}

function renderBreeds(breedList) {
  for (const breedData of breedList) {
    renderBreed(breedData);
  }
}

function renderBreed(breedName) {
  const breedParagraph = document.createElement("p");
  breedParagraph.style.cursor = "pointer";
  breeds.appendChild(breedParagraph);
  breedParagraph.innerText = breedName;

  breedParagraph.addEventListener("click", () => {
    console.log("i clicked on: ", breedParagraph.innerText);
    fetch(`https://dog.ceo/api/breed/${breedParagraph.innerText}/images`)
      .then((r) => r.json)
      .then(useJSONResponseImage);
  });
  function useJSONResponseImage(json) {}
}

getData();
