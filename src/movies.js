import { filtroDirector, filtroProductor} from './data.js';// si es entre parentesis estas exportando una funcion 

import data from './data/ghibli/ghibli.js';



const container = document.getElementById('card');
const selectDirector = document.querySelector('#directores');
const btnOrderAZ = document.getElementById('orderAZ');
const selectProductor = document.querySelector('#productores');
//const btnOrderAZ = document.getElementById('orderAZ');


//Crea las tarjetas y muestra la data de la pelicula. 
window.onload=function print(){

    const allMovies= data.films.map(movie => 
        `
        <div id="cardMovie">
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

    


selectDirector.addEventListener('change', function() {
   let valor= document.getElementById('directores').value;//agarra el valor del director 
   console.log(valor);
    const directores= filtroDirector(data, valor).map(movie =>
        `<div id="cardMovie">
        <img id="imgMovie" src="${movie.poster}">
        <buttom id="bntViewMovie" class="titleMovie">${movie.title}</button>
        </div>
        ` );
        container.innerHTML=directores.join('');
  
});

selectProductor.addEventListener('change', function() {
    let valor= document.getElementById('productores').value;//agarra el valor del director 
     const productores= filtroProductor(data, valor).map(movie =>
         `<div id="cardMovie">
         <img id="imgMovie" src="${movie.poster}">
         <buttom id="bntViewMovie" class="titleMovie">${movie.title}</button>
         </div>
         ` );
         container.innerHTML=productores.join('');
});



 
 btnOrderAZ.addEventListener('click', function() {
     
let alfabeticamenteAB=data.films.map(function(movies) { 
    movies.title.sort(function (){
       return movies.title
    })

    
    
   });
   alfabeticamenteAB.sort();
});


 /*
 let cardMovies= (data) => {

};*/


/*var alfabeticamente=data.films.map(function(movies) { // az
    return movies.title;
 });
 console.log(alfabeticamente.sort());

 
 //console.log( alfabeticamenteAB.reverse());// de la z a la A




 
//const selectScore = document.querySelector('#rt-score');


/* selectScore.addEventListener('change', function(){
    let scoreValue= document.getElementById('re-score').value;
 })



export const filterScore= (data, selectScore) => {
  let filtro;
  if(selectScore == 1){
    filtro= data.films.filter(function(dir){
      return dir.title;//selectDirector es la variable del listboxs
  })}
if(selectScore == 80){
    filtro=data.films.filter(function(dir){
        return dir.rt_score >= 80;
    })
}
if( selectScore == 50){
    filtro=data.films.filter(function(dir){
        return (dir.rt_score >= 50) && (dir.rt_score <= 79);
    })
  }else{
   filtro=data.films.filter(function(dir){
    return dir.rt_score <= 49;
})}
console.log(filtro);
return filtro;
};*/
