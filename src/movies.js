import { filterByScore, filtroDirector, filterProducer, filterABC } from './data.js';

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
        <button id="bntViewMovie" class="titleMovie" data-id="${movie.id}">${movie.title}</button>
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
    const producers = filterProducer(data, valorProductor).map(movie =>
        generarhtml(movie));
    container.innerHTML = producers.join('');
});


selectScore.addEventListener('change', function () {
    let valorScore = document.getElementById('rt-score').value;//agarra el valor del score 
    const score = filterByScore(data, valorScore).map(movie =>
        generarhtml(movie));
    container.innerHTML = score.join('');
});

btnOrderAZ.addEventListener('click', function () {
    const orderAZ = filterABC(data).map(movie =>
        generarhtml(movie));
    container.innerHTML = orderAZ.join('');
});


btnOrderZA.addEventListener('click', function () {
    const ordenZA = filterABC(data).map(movie =>
        generarhtml(movie));
    container.innerHTML = ordenZA.reverse().join('');
});




//
const btnView= document.querySelectorAll('#bntViewMovie');//busque 
console.log(btnView);
btnView.forEach(function(button){
    button.addEventListener('click', function(event){
        const id = event.target.dataset.id;
        console.log( id);
        const movie = findById(data, id)
        modalMovies(movie);
    })

});

export const findById = (data,id) => {
   let dataMovie= data.films.forEach(dataGhibli => { 
        return dataGhibli.id == id
    })
    return dataMovie
}



const modalMovies= (movieData) =>{
    
    return `<div class="modal" id="modal1">
    <div class="modal-dialog">
      <header class="modal-header">
        ...
        <button class="close-modal" aria-label="close modal" data-close>✕</button>
      </header>
      <section class="modal-content">...</section>
      <footer class="modal-footer">...</footer>
    </div>
  </div>`
}