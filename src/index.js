//-------------------------------------------------------------------------------//
//GLOBAL VARIABLES
const url = "http://localhost:3000/ramens";
const ramenMenu = document.getElementById("ramen-menu");
const detailsDiv = document.getElementById("ramen-detail");
const detailsName = document.querySelector(".name");
const detailsRestaurant = document.querySelector(".restaurant");
const detailsImg = document.querySelector(".detail-image");
const detailsRating = document.querySelector("#rating-display");
const detailsComment = document.querySelector("#comment-display");
const newRamenForm = document.getElementById("new-ramen");
//-------------------------------------------------------------------------------//
//FETCH REQUESTS
fetch(url)
  .then((resp) => resp.json())
  .then((ramenNoodles) => {
    ramenNoodles.forEach((ramen) => {
      createImgList(ramen);
    });
    createMainImgDetails(ramenNoodles[0]);
  })
  .catch((err) => err.message);
//-------------------------------------------------------------------------------//
//FUNCTIONS

//-------------------------------------------------------------------------------//
function createImgList(ramen) {
  const img = document.createElement("img");
  img.src = ramen.image;
  ramenMenu.appendChild(img);
}

function createMainImgDetails(ramenObj) {
  detailsName.textContent = ramenObj.name;
  detailsRestaurant.textContent = ramenObj.restaurant;
  detailsImg.src = ramenObj.image;
  detailsComment.textContent = ramenObj.comment;
  detailsRating.textContent = ramenObj.rating;
}

newRamenForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newRamen = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target["new-comment"].value,
  };
  createImgList(newRamen);
});
