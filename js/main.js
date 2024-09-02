import { showLoading, hideLoading } from "./loadingManager.js";
import { cargarPeliculasAsync } from "./dataManager.js";
import { displayPeliculas } from "./renderPeliculas.js";

async function mostrarPeliculas(){
  showLoading()
  await cargarPeliculasAsync()
  displayPeliculas()
  hideLoading()
}

mostrarPeliculas()
