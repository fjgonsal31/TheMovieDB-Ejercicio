import { showLoading, hideLoading } from "./loading.js";
import { loadMovies } from "./data.js";
import { renderMovies } from "./renderMovies.js";

async function showMovies() {
  showLoading();
  await loadMovies();
  renderMovies();
  hideLoading();
}

showMovies();
