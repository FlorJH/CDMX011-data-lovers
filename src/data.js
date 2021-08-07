// estas funciones son de ejemplo

export const filtroDirector= (data, selectDirector) => {
  let filtro;
  if(selectDirector == 1){
    filtro= data.films.filter(function(MoviesByDirector){
      return MoviesByDirector.director;//selectDirector es la variable del listboxs
  })
  }else{
   filtro=data.films.filter(function(MoviesByDirector){
    return MoviesByDirector.director == selectDirector;//selectDirector es la variable del listboxs
})}
return filtro;
};


export const filtroProductor= (data, selectProductor) => {
  let filtro;
  if(selectProductor == 1){
    filtro= data.films.filter(function(moviesByProductor){
      return moviesByProductor.producer;//selectDirector es la variable del listboxs
  })
  }else{
   filtro=data.films.filter(function(moviesByProductor){
    return moviesByProductor.producer == selectProductor;//selectDirector es la variable del listboxs
})}
return filtro;
};



export const filtroByMovie= (data, movieSelected) => {
  let filtro=data.films.filter(function(peopleByMovie){
     return peopleByMovie.title == movieSelected; //regresara la porcion del objeto que corresponde a dicha peli
      })
      return filtro;
  }
  

  
  export const filtroBygender= (data, gender) => {
    
  data.films.forEach(function(pelicula) {
      const filtro1=pelicula.people.filter(function(personajes){
        //return personajes.gender == gender;
          
          //regresara la porcion del objeto que corresponde a dicha peli
          });
          return filtro1
     });
    }





