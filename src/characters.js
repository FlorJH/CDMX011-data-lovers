import { filtroByMovie } from './data.js';// si es entre parentesis estas exportando una funcion 

import data from './data/ghibli/ghibli.js';


const container = document.getElementById('card');
const selectMovie = document.querySelector('#movies');
const selectGender = document.querySelector('#gender');

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
let listBox = data.films.map(title =>
    `
    <option value="${title.title}">${title.title}</option>
    `
); selectMovie.innerHTML = `<option value="1" selected>Filter by Movie</option>` + listBox;



/*filtrado de personaje por pelicula */
selectMovie.addEventListener('change', function () {
    let valor = document.getElementById('movies').value;//agarra el valor del pelicula seleccionada 
    filtroByMovie(data, valor).forEach(PeopleMovie => {
        let dato = PeopleMovie.people.map(values => {
            return generarhtml(values)
        }
        ); container.innerHTML = dato.join('');

    });
});

/*filtrado por especies*/
/* data.films.forEach(function(people){
   let filtro=people.people.filter(function(peopleBySpecie){
      return peopleBySpecie.specie == "Human"; //regresara la porcion del objeto que corresponde a dicha peli
       });
       //console.log(filtro);
       return filtro
  });
*/

//filtroByGender(data,'Male');




let filtro1;
let mostrar = [];

const filtroByGender = (data, gender) => {
    data.films.forEach(dataGhibli => {
        filtro1 = dataGhibli.people.filter(personajes => {
            return personajes.gender == gender; //regresara la porcion del objeto que corresponde a dicha peli
        })
        mostrar.push(filtro1);
    })
   console.log(mostrar);
    return mostrar;
}


/*filtrado por genero*/
selectGender.addEventListener('change', function() {
    let valor= document.getElementById('gender').value;//agarra el valor del genero seleccionada
filtroByGender(data,valor).forEach(dataGender=>{
    console.log(dataGender.name);
})
});

//console.log(mostrar);
//console.log(filtroByGender(data, 'Male'));