import {example} from './data.js';

import data from './data/ghibli/ghibli.js';


//Crea las tarjetas y muestra la data de la pelicula. 
window.onload=function print(){
const container = document.getElementById('card');
const allMovies= data.films.map(movie => 
    `<div id="cardMovie">
    <img id="imgMovie" src="${movie.poster}">
    <h4 id="titleMovie">${movie.title}</h4>
    <buttom id="bntViewMovie">More Detalls</button>
    </div>
    `
); container.innerHTML=allMovies.join('');
}


/*
data.films.forEach(movie=> {
    let cardMovie = document.createElement("div");         // Create a <div> node
    let imgMovi = document.createElement("img");            //Cracion de imagen
    let btnDetalls = document.createElement("button");
    cardMovie.id="cardMovie";
    imgMovi.id="imgMovie";
    
    imgMovi.src=`${movie.poster}`;
    
    
    let movieTitle = document.createTextNode(movie.title);       // Create a text node
    
    cardMovie.appendChild(movieTitle);                              // Append the text to <P>
    cardMovie.appendChild(imgMovi);
     cardMovie.appendChild(btnDetalls);


    document.getElementById("card").appendChild(cardMovie);                    
    
    //document.getElementById("card").appendChild(imgMovi);
 
});*/





