console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  localStorage.removeItem("breed");
  localStorage.removeItem("index");
  window.location = "/";
});

let breeds = document.getElementById("breeds");
let breedImage = document.getElementById("breed-image");
let pageNumber = document.getElementById("page-number");

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

  if (localStorage.getItem("breed") && localStorage.getItem("index")) {
    document
      .getElementById(localStorage.breed)
      .classList.add("breed--selected");
    pageNumber.innerText = "";
    pageNumber.innerText = parseInt(localStorage.index) + 1;
  }
}

function renderBreed(breedName) {
  const breedParagraph = document.createElement("p");
  breedParagraph.setAttribute("id", breedName);
  breedParagraph.style.cursor = "pointer";
  breeds.appendChild(breedParagraph);
  breedParagraph.innerText = breedName;

  breedParagraph.addEventListener("click", () => {
    if (document.querySelector(".breed--selected"))
      document
        .querySelector(".breed--selected")
        .classList.remove("breed--selected");
    localStorage.setItem("index", 0);
    pageNumber.innerText = "";
    pageNumber.innerText = parseInt(localStorage.index) + 1;
    localStorage.setItem("breed", breedParagraph.innerText);
    breedParagraph.classList.add("breed--selected");
    fetch(`https://dog.ceo/api/breed/${breedParagraph.innerText}/images`)
      .then((r) => r.json())
      .then(renderBreedImages);
  });
}

let breedImageArray = [];
let i = 0;

function renderBreedImages(image) {
  breedImageArray = image.message;
  console.log(breedImageArray);
  breedImage.src = breedImageArray[0];
}
document.getElementById("forward").addEventListener("click", forward);

function forward() {
  if (document.querySelector(".breed--selected")) {
    if (localStorage.index < breedImageArray.length) {
      localStorage.index++;
    }
    pageNumber.innerText = "";
    pageNumber.innerText = parseInt(localStorage.index) + 1;
    breedImage.src = breedImageArray[localStorage.index];
  }

  document.getElementById("backward").addEventListener("click", backward);

  function backward() {
    if (document.querySelector(".breed--selected")) {
      if (localStorage.index > 1) {
        localStorage.index--;
      }
      pageNumber.innerText = "";
      pageNumber.innerText = parseInt(localStorage.index) + 1;
      breedImage.src = breedImageArray[localStorage.index];
    }
  }
}
getData();
