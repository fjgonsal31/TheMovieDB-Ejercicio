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
                        <p class="voteAverage">${movie.vote_average.toFixed(
                          1
                        )}⭐</p>
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
  const movies = getMovies();
  const movie = movies.find((movie) => String(movie.id) === idMovie);
  const detailsMovie = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Detalle ${movie.title}</title>
    </head>
    <body>
        <div class="detalles-pelicula">
          <h1>${movie.title} (${movie.id})</h1>
          <img src="${urlImg}${movie.backdrop_path}" alt="${movie.title}">
          <p>${movie.release_date}<br>${movie.overview}</p>
      </div>
    </body>
    </html>
  `;

  const blob = new Blob([detailsMovie], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  window.open(url, "_blank");
}
