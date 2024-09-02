import { getPeliculas } from "./dataManager.js";


const urlImage = 'https://image.tmdb.org/t/p/w500'

export function displayPeliculas(){
    const peliculas = getPeliculas()
    let contenedor = ''
    if(peliculas && Array.isArray(peliculas)){
        peliculas.map(pelicula => {
            contenedor +=
            `
                <div class="pelicula">
                    <img class="poster" src="${urlImage}${pelicula.backdrop_path}" alt="${pelicula.title}"/>
                    <h3>${pelicula.title}</h3>
                    <div class="pelicula-texto">
                        <p class="voteAverage">⭐${pelicula.vote_average.toFixed(2)}</p>
                        <a data-id="${pelicula.id}" class="verMas">Ver más</a>
                    </div>
                </div>
            `
        })
    }else{
        contenedor = '<p>No hay películas disponibles</p>'
    }
    document.getElementById('principal').innerHTML = contenedor
    //Agregar event Listener a los enlaces
    const verMasLinks = document.querySelectorAll('.verMas')
    verMasLinks.forEach(link => {
        link.addEventListener('click', mostrarDetallesPelicula)
    })
}

function mostrarDetallesPelicula(event){
    const idPelicula = event.target.getAttribute('data-id')
    alert("Mostrar detalles de la pelicula: " + idPelicula)
}