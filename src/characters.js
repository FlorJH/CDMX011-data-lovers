import { filterByMovie, filterByGender, filterBySpecie } from './data.js';// si es entre parentesis estas exportando una function

import data from './data/ghibli/ghibli.js';


const container = document.getElementById('card');
const selectMovie = document.querySelector('#movies');
const selectGender = document.querySelector('#gender');
const selectSpecie = document.querySelector('#specie');

let htmlDom = "";

data.films.forEach(people => {
    people.people.forEach(values => {
        let html = generarhtml(values)
        htmlDom += html;
    }
    )
});

container.innerHTML = htmlDom;

function generarhtml(values) {
    return `
    <div id="cardPeople">
    <img id="imgPeople" src="${values.img}">
    <div id="info">
    <h3 id="name" >${values.name}</h4>
    <h5>Genero: ${values.gender}</h5>
    <h5>Age: ${values.age}</h5>
    <h5>Specie: ${values.specie}</h5>
    </div>
    </div>
    `
}


/*Creacion de listbox dinamico */
let listBox = data.films.map(movie =>
    `
    <option value="${movie.title}">${movie.title}</option>
    `
    //Es para que vaya agregando 
); selectMovie.innerHTML = `<option value="1" selected>Filter by Movie</option>` + listBox;



/*filtrado de personaje por pelicula */
selectMovie.addEventListener('change', function () {
    let movieValue = document.getElementById('movies').value;//agarra el valor del pelicula seleccionada 
   if(movieValue == 1){
    container.innerHTML = htmlDom;
   }else{
   
    filterByMovie(data, movieValue).forEach(Movie => {
        let dato = Movie.people.map(valuesPeople => {
            return generarhtml(valuesPeople)
        }
        ); container.innerHTML = dato.join('');

    });}
});



/*filtrado por genero*/
selectGender.addEventListener('change', function() {
    let genderValue= document.getElementById('gender').value;//agarra el valor del genero seleccionada
   let gender= filterByGender(data, genderValue).map(dataMovie=>{
        return generarhtml(dataMovie);
})
container.innerHTML = gender.join('');
});



selectSpecie.addEventListener('change', function() {
    let valorSpecie= document.getElementById('specie').value;//agarra el valor del genero seleccionada
   let specie= filterBySpecie(data,valorSpecie).map(dataMovie=>{
        return generarhtml(dataMovie);
})
container.innerHTML = specie.join("");
});