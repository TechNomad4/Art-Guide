//Make comment work
function newComment(e) {
  const nameInput = document.getElementById("nameInput");
  const commentText = document.getElementById("message");
  const commentsSpace = document.getElementById("commentsSpace");

  commentsSpace.insertAdjacentHTML(
    "beforeend",
    `<section class="comment">
      <h3>${nameInput.value} said:</h3>
      <p>"${commentText.value}"</p>
    </section>`
  );

  commentText.value = "";
  nameInput.value = "";
}

const mainArtObject = document.getElementById("mainArtObject");
const paintRequested = localStorage.getItem("artObjectToDetails");

const { artObjects } = data;

const [foundArt] = artObjects.filter(obj => obj.id === paintRequested);

mainArtObject.setAttribute("src", foundArt.webImage.url);
mainArtObject.setAttribute("alt", foundArt.title);

document.getElementById("pageHeader").textContent = foundArt.title;
document.getElementById(
  "paintAuthor"
).textContent = `Author: ${foundArt.principalOrFirstMaker}`;

document.title = foundArt.title;
