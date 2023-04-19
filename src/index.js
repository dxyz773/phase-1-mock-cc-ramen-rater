//-------------------------------------------------------------------------------//
//GLOBAL VARIABLES
const URL = "http://localhost:3000/ramens";
const ramenMenu = document.getElementById("ramen-menu");
let ramenArray;
//-------------------------------------------------------------------------------//

function getRamenNoodles() {
  return fetch(URL)
    .then((resp) => resp.json())
    .then((ramenNoodles) => {
      renderimages(ramenNoodles);
      renderMainRamen(ramenNoodles[0]);
    });
}

function renderimages(ramen) {
  ramen.map((ram) => {
    appendImg(ram);
  });
}

function appendImg(ramen) {
  const img = document.createElement("img");
  img.src = ramen.image;
  ramenMenu.append(img);
  img.addEventListener("click", (e) => renderMainRamen(ramen));
}

function renderMainRamen(ramen) {
  const detailsDiv = document.getElementById("ramen-detail");
  const detailsImg = document.querySelector(".detail-image");
  const detailsName = document.querySelector(".name");
  const detailsRestaurant = document.querySelector(".restaurant");
  const detailsRating = document.querySelector("#rating-display");
  const detailsComment = document.querySelector("#comment-display");
  const form = document.getElementById("new-ramen");

  detailsImg.src = ramen.image;
  detailsName.textContent = ramen.name;
  detailsRestaurant.textContent = ramen.restaurant;
  detailsRating.textContent = ramen.rating;
  detailsComment.textContent = ramen.comment;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addNewRamen(e);
  });
}

function addNewRamen(e) {
  const target = e.target;
  console.log(e.target);
  const newName = target.querySelector("#new-name").value;
  const newRestaurant = target.querySelector("#new-restaurant").value;
  console.log(newRestaurant);
  const newRamen = {};
}

getRamenNoodles();
