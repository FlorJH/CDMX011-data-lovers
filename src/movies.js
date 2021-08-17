import { filterByScore, filtroDirector, filterProducer, filterABC, findById } from './data.js';

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


let btnView = document.querySelectorAll('#bntViewMovie');//btn  to "view more about movies"




selectDirector.addEventListener('change', function () {
    let directorValue = document.getElementById('directores').value;//agarra el valor del director 
    const directors = filtroDirector(data, directorValue).map(movie =>//llamamos a la funcion filtroDirector, e interamaos sobre el resultado y pasamos los atributos del objeto a
        //funcion generar html
        generarhtml(movie));
    container.innerHTML = directors.join(''); //pintamos en el dom el res de direcotrs 

    btnView = document.querySelectorAll('#bntViewMovie');//to reload the qery and reload de buttons values 
    cargarBotones();
});

selectProductor.addEventListener('change', function () {
    let valorProductor = document.getElementById('productores').value;//agarra el valor del productor 
    const producers = filterProducer(data, valorProductor).map(movie =>
        generarhtml(movie));
    container.innerHTML = producers.join('');
    btnView = document.querySelectorAll('#bntViewMovie');
    cargarBotones();
});


selectScore.addEventListener('change', function () {
    let valorScore = document.getElementById('rt-score').value;//agarra el valor del score 
    const score = filterByScore(data, valorScore).map(movie =>
        generarhtml(movie));
    container.innerHTML = score.join('');
    btnView = document.querySelectorAll('#bntViewMovie');
    cargarBotones();
});

btnOrderAZ.addEventListener('click', function () {
    const orderAZ = filterABC(data).map(movie =>
        generarhtml(movie));
    container.innerHTML = orderAZ.join('');

    btnView = document.querySelectorAll('#bntViewMovie');
    cargarBotones();
});



btnOrderZA.addEventListener('click', function () {
    const ordenZA = filterABC(data).map(movie =>
        generarhtml(movie));
    container.innerHTML = ordenZA.reverse().join('');

    btnView = document.querySelectorAll('#bntViewMovie');
    cargarBotones();

});






const cargarBotones = () => {
    btnView.forEach(function (button) {
        button.addEventListener('click', function (event) {
            const id = event.target.dataset.id;
            const movie = findById(data, id)
            modal.style.display = "block";
            createModal(movie);
            closeModal();
            }
            
            
        )

    });
}



cargarBotones();


const createModal = (movie) => {
    movie.map(movieData => {

        return modal.innerHTML = `
    <div class="modal-content">
    <div class="modal-header">
      <span class="close" ">&times;</span>
      <h1>${movieData.title}</h1>
    </div>
   
    <div class="description">

    <div class="imgData">
    <img alt="poster movie" src="${movieData.poster}">
    <p><b>Rotten Score:</b>  ${movieData.rt_score} </p>
    </div>

    <div id="sub-columna">
    <p><b>Director:</b> ${movieData.director}  &emsp;&emsp;        
     <b>Producer:</b> ${movieData.producer}    &emsp;&emsp;
      <b>Release Date:</b> ${movieData.release_date}</p>  
    <h3>Description</h3>
    <p>${movieData.description}</p>
    </div></div>
  </div>
    `
    });
}




var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];



const closeModal = () => {
   span= document.getElementsByClassName("close")[0];
    span.addEventListener('click', function () {
        modal.style.display = "none";
    })
    
    window.onclick = function (event) {// When the user clicks anywhere outside of the modal, close it

        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}