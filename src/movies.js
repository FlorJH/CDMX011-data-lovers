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
    let valorDirector = document.getElementById('directores').value;//agarra el valor del director 
    const directores = filtroDirector(data, valorDirector).map(movie =>
        generarhtml(movie));
    container.innerHTML = directores.join('');

});

selectProductor.addEventListener('change', function () {
    let valorProductor = document.getElementById('productores').value;//agarra el valor del productor 
    const productores = filtroProductor(data, valorProductor).map(movie =>
        generarhtml(movie));
    container.innerHTML = productores.join('');
});


selectScore.addEventListener('change', function () {
    let valorScore = document.getElementById('rt-score').value;//agarra el valor del score 
    const score = filtroByScore(data, valorScore).map(movie =>
        generarhtml(movie));
    container.innerHTML = score.join('');
});

btnOrderAZ.addEventListener('click', function () {
    //let valorScore= document.getElementById('rt-score').value;//agarra el valor del score 
    const abc = filtroABC(data).map(movie =>
        generarhtml(movie));
    container.innerHTML = abc.join('');
});


btnOrderZA.addEventListener('click', function () {
    //let valorScore= document.getElementById('rt-score').value;//agarra el valor del score 
    const abc = filtroABC(data).map(movie =>
        generarhtml(movie));
    container.innerHTML = abc.reverse().join('');
});

