let peliculas = null
let totalPages = 0;

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDdjYzUyNTdiZmZmYjc2N2NhYTYxNTRlNDNhY2Y0OSIsIm5iZiI6MTcyNTI1OTIzOS4xMjM5MjMsInN1YiI6IjY1NWE2NDRhZDRmZTA0MDBjNDI0NzY1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u9jfPIb7qZbqtq1siZvYtdkMZUGrVkwTa4zQBWRcj5w'
    }
  };
  

export async function cargarPeliculasAsync() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1', options)

        if(!response.ok){
            throw new Error('No se pudo obtener las películas')
        }
        const data = await response.json()
        peliculas = await data.results
        totalPages = data.total_pages
        console.log(peliculas)
        console.log(totalPages)
    } catch (error) {
        console.log('Error al obtener las películas: ', error)
        peliculas = []
    }

}

export function getPeliculas(){
    return peliculas
}

export function getTotalPages(){
    return totalPages
}

