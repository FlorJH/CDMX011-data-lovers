import { filtroByScore, filtroDirector, filtroProductor, filtroABC } from './data.js';

import data from './data/ghibli/ghibli.js';



const container = document.getElementById('card');
const selectDirector = document.querySelector('#directores');
const selectProductor = document.querySelector('#productores');
const selectScore = document.querySelector('#rt-score');
const btnOrderAZ = document.querySelector('#orderAZ');
const btnOrderZA = document.querySelector('#orderZA');


//Crea las tarjetas y muestra la data de la pelicula. 


function generarhtml(movie) {
    return `
        <div id="cardMovie">
        <img id="imgMovie" src="${movie.poster}">
        <buttom id="bntViewMovie" class="titleMovie">${movie.title}</button>
        </div>
        `
}

const allMovies = data.films.map(movie =>
    generarhtml(movie)
); container.innerHTML = allMovies.join('');


selectDirector.addEventListener('change', function () {
    let directorValue = document.getElementById('directores').value;//agarra el valor del director 
    const directors = filtroDirector(data, directorValue).map(movie =>//llamamos a la funcion filtroDirector, e interamaos sobre el resultado y pasamos los atributos del objeto a
        //funcion generar html
        generarhtml(movie));
    container.innerHTML = directors.join(''); //pintamos en el dom el res de direcotrs 

});

selectProductor.addEventListener('change', function () {
    let valorProductor = document.getElementById('productores').value;//agarra el valor del productor 
    const producers = filtroProductor(data, valorProductor).map(movie =>
        generarhtml(movie));
    container.innerHTML = producers.join('');
});


selectScore.addEventListener('change', function () {
    let valorScore = document.getElementById('rt-score').value;//agarra el valor del score 
    const score = filtroByScore(data, valorScore).map(movie =>
        generarhtml(movie));
    container.innerHTML = score.join('');
});

btnOrderAZ.addEventListener('click', function () {
    const orderAZ = filtroABC(data).map(movie =>
        generarhtml(movie));
    container.innerHTML = orderAZ.join('');
});


btnOrderZA.addEventListener('click', function () {
    const ordenZA = filtroABC(data).map(movie =>
        generarhtml(movie));
    container.innerHTML = ordenZA.reverse().join('');
});

