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
    fetch(`https://dog.ceo/api/breed/${breedParagraph.innerText}/images`)
      .then((r) => r.json())
      .then(renderBreedImages);

    breedImageArray[0];
    localStorage.setItem("breed", breedParagraph.innerText);
    localStorage.setItem("index", pageNumber.innerText - 1);
  });
}

let breedImage = document.getElementById("breed-image");
let pageNumber = document.getElementById("page-number");
let breedImageArray = [];
let i = 0;

function renderBreedImages(image) {
  breedImageArray = image.message;
  console.log(breedImageArray);
  breedImage.src = breedImageArray[0];
}
document.getElementById("forward").addEventListener("click", forward);

function forward() {
  if (i < breedImageArray.length) {
    i++;
    breedImage.src = breedImageArray[i];
    pageNumber.innerText = i + 1;
  }
}

document.getElementById("backward").addEventListener("click", backward);

function backward() {
  if (pageNumber.innerText > 1) {
    breedImage.src = breedImageArray[i - 1];
    pageNumber.innerText = i;
    i--;
  }
}

getData();
