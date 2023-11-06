let likesObj = {};

if (localStorage.getItem("likes") == null) {
  artObjects.forEach(obj => {
    likesObj[obj.id] = 0;
  });
  localStorage.setItem("likes", JSON.stringify(likesObj));
} else {
  document.getElementById("likeBtn").addEventListener("click", e => {
    const currentArt = localStorage.getItem("artObjectToDetails");
    likesObj = JSON.parse(localStorage.getItem("likes"));
    likesObj[currentArt] = likesObj[currentArt] + 1;
    localStorage.setItem("likes", JSON.stringify(likesObj));
    document.getElementById(
      "likeBtn"
    ).textContent = `Likes ${likesObj[currentArt]}!`;
  });
}

$(document).ready(() => {
  const currentArt = localStorage.getItem("artObjectToDetails");
  likesObj = JSON.parse(localStorage.getItem("likes"));
  document.getElementById(
    "likeBtn"
  ).textContent = `Likes ${likesObj[currentArt]}!`;
});
