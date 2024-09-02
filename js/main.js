import { showLoading, hideLoading } from "./loading.js";
import { loadMovies, getTotalPages } from "./data.js";
import { renderMovies } from "./renderMovies.js";
import { toggleMenu } from "./menu.js";

let btn = document.getElementById("boton");
let btnPrev = document.getElementById("btnAnterior");
let btnNext = document.getElementById("btnSiguiente");
export let page = 1;

async function showMovies() {
  showLoading();
  await loadMovies(page);
  renderMovies();
  hideLoading();
}

showMovies();

btnPrev.style.pointerEvents = "none";
btnPrev.style.backgroundColor = "grey";

btn.addEventListener("click", toggleMenu);

btnPrev.addEventListener("click", () => {
  if (page <= getTotalPages() && page > 1) {
    page--;
    showMovies();
    btnNext.style.pointerEvents = "auto";
    btnNext.style.backgroundColor = "";
  }

  if (page <= 1) {
    btnPrev.style.pointerEvents = "none";
    btnPrev.style.backgroundColor = "grey";
  }
});

btnNext.addEventListener("click", () => {
  if (page < getTotalPages()) {
    page++;
    showMovies();
  }

  if (page <= getTotalPages()) {
    btnPrev.style.pointerEvents = "auto";
    btnPrev.style.backgroundColor = "";
  }

  if (page === getTotalPages()) {
    btnNext.style.pointerEvents = "none";
    btnNext.style.backgroundColor = "grey";
  }
});
