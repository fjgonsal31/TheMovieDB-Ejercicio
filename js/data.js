import { tokenApi } from "../conf.js";
import { page } from "./main.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: tokenApi,
  },
};

let movies = null;
let totalPages = null;

export async function loadMovies(pageLoaded) {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page="+page+"",
      options
    );

    if (!response.ok) {
      throw new Error("No se obtuvieron películas!");
    }

    const data = await response.json();

    movies = data.results;
    totalPages = data.total_pages;
    // totalPages = 3;
  } catch (error) {
    console.log(error);
  }
}

export function getMovies() {
  return movies;
}

export function getTotalPages() {
  return totalPages;
}
