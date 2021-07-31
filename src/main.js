import {example, FiltroDirector} from './data.js';// si es entre parentesis estas exportando una funcion 

import data from './data/ghibli/ghibli.js';

const container = document.getElementById('card');

//Crea las tarjetas y muestra la data de la pelicula. 
window.onload=function print(){

const allMovies= data.films.map(movie => 
    `<div id="cardMovie">
    <img id="imgMovie" src="${movie.poster}">
    <!--<div id="info">
    <h4 class="tarjeta" id="titleMovie">${movie.title}</h4>
    <h5>Fecha de esctreno: ${movie.release_date}</h5>
    </div>-->
    <buttom id="bntViewMovie" class="titleMovie">${movie.title}</button>
    </div>
    `
); container.innerHTML=allMovies.join('');
}


var selectDirector = document.querySelector('#directores');
selectDirector.addEventListener('change', function() {
   var val= document.getElementById('directores').value;//agarra el valor del director 
    const directores= FiltroDirector(data, val).map(movie =>
        `<div id="cardMovie">
        <img id="imgMovie" src="${movie.poster}">
        <!--<div id="info">
        <h4 class="tarjeta" id="titleMovie">${movie.title}</h4>
        <h5>Fecha de esctreno: ${movie.release_date}</h5>
        </div>-->
        <buttom id="bntViewMovie" class="titleMovie">${movie.title}</button>
        </div>
        ` );
        container.innerHTML=directores.join('');
  
});







/*
 var alfabeticamenteAB=data.films.map(function(director) { // az
    return director.title;
 });
 console.log(alfabeticamenteAB.sort());

 
 console.log( alfabeticamenteAB.reverse());// de la z a la A
*/


