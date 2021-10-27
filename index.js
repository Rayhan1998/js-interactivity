let inputField = document.querySelector("input");
let ul = document.querySelector("ul");
let message = document.querySelector("#message");
document.querySelector("form").addEventListener("submit", addMovie);

function addMovie(e) {
  e.preventDefault();

  let movie = document.createElement("li");
  let movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);
  ul.appendChild(movie);
  inputField.value = "";
}

function deleteMovie(e) {
  e.target.parentNode.remove();
  message.textContent = "Movie deleted";
}

function crossOffMovie(e) {
  e.target.classList.toggle("checked");

  if (e.target.classList.contains("checked")) {
    message.textContent = "Movie Watched";
  } else {
    message.textContent = "Movie added Back";
  }
}
