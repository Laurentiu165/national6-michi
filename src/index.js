console.log("JavaScript - Dogs App");

import { useJSONResponse, forward, backward } from "./renderBreeds";
import{ getBreedNameFromServer } from "./utils/api"

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

getBreedNameFromServer(useJSONResponse);

document.getElementById("forward").addEventListener("click", forward);
document.getElementById("backward").addEventListener("click", backward);



