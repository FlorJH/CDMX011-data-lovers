import data from './data/ghibli/ghibli.js';


const container = document.getElementById('card');

let personajes;

 data.films.map(people => {
  personajes= people.people.map(values =>
        `
        <div id="cardPeople">
        <img id="imgPeople" width="50px" height="50px" src="${values.img}">
        <div id="info">
        <h4 class="tarjeta" id="titlePeople">${values.name}</h4>
        <h5>Genero: ${values.gender}</h5>
        </div>
        <p>${values.age}</p>
        <p>${values.specie}</p>
        </div>
        `
); container.innerHTML=personajes.join('');

} ); 




/*

selectPelicula.addEventListener('change', function() {

    let movieSelected= 'My Neighbor Totoro';//document.getElementById('directores').value;//agarra el valor del director 
    data.films.map(movie =>{
    const personaje= filtroPelicula(movie.people, movieSelected).map(values =>
        
        `
        <div id="cardPeople">
        <img id="imgPeople" width="50px" height="50px" src="${values.img}">
        <div id="info">
        <h4 class="tarjeta" id="titlePeople">${values.name}</h4>
        <h5>Fecha de esctreno: ${values.gender}</h5>
        </div>
        <p>${values.age}</p>
        <p>${values.specie}</p>
        </div>
        `
        );container.innerHTML=personaje.join('');

    });     
   
});

export const filtroPelicula= (data, movieSelected) => {
const people= data.filter(title => {
   
    if( movieSelected == people.title) {
        
        return title.people;
    }
 });console.log(people);
}*/