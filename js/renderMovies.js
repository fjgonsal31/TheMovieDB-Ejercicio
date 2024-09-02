import { getMovies } from "./data.js";

const urlImg = "https://image.tmdb.org/t/p/w500/";

export function renderMovies() {
  const movies = getMovies();
  let container = "";

  if (movies && Array.isArray(movies)) {
    movies.map((movie) => {
      container += `
                <div class="pelicula">
                    <img class="poster" src="${urlImg}${movie.backdrop_path}"/>
                    <h3>${movie.title}</h3>
                    <div class="pelicula-texto">
                        <p class="voteAverage">${movie.vote_average.toFixed(1)}⭐</p>
                        <a class="verMas" data-id="${movie.id}">Ver más</a>
                    </div>
                </div>
                `;
    });
  } else {
    container = "<p>No hay películas disponibles.</p>";
  }

  document.getElementById("principal").innerHTML = container;

  const links = document.querySelectorAll(".verMas");

  links.forEach((link) => {
    link.addEventListener("click", showMore);
  });
}

function showMore(event) {
  const idMovie = event.target.getAttribute("data-id");
  alert("ID de la película: " + idMovie);
}
