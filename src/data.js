// estas funciones son de ejemplo

export const filtroDirector = (data, selectDirector) => {
  let filtro;
  if (selectDirector == 1) {
    filtro = data.films.filter(function (MoviesByDirector) {
      return MoviesByDirector.director;//selectDirector es la variable del listboxs
    })
  } else {
    filtro = data.films.filter(function (MoviesByDirector) {
      return MoviesByDirector.director == selectDirector;//selectDirector es la variable del listboxs
    })
  }
  return filtro;
};


export const filtroProductor = (data, selectProductor) => {
  let filtro;
  if (selectProductor == 1) {
    filtro = data.films.filter(function (moviesByProductor) {
      return moviesByProductor.producer;//selectDirector es la variable del listboxs
    })
  } else {
    filtro = data.films.filter(function (moviesByProductor) {
      return moviesByProductor.producer == selectProductor;//selectDirector es la variable del listboxs
    })
  }
  return filtro;
};



export const filtroByMovie = (data, movieSelected) => {
  let filtro = data.films.filter(function (peopleByMovie) {
    return peopleByMovie.title == movieSelected; //regresara la porcion del objeto que corresponde a dicha peli
  })
  return filtro;
}

export const filtroByScore = (data, scoreSelected) => {
  let byScore = data.films.filter(function (MoviesByScore) {
    if (scoreSelected == "NotGood") {

      return MoviesByScore.rt_score <= 49;
    }
    if (scoreSelected == "Good") {

      return MoviesByScore.rt_score >= 50 && MoviesByScore.rt_score <= 89;
    }
    if (scoreSelected == "Great") {

      return MoviesByScore.rt_score >= 90;
    }
    else {
      return MoviesByScore.rt_score >= "1"
    }
  })
  return byScore
}

export const filtroABC = (data) => {
  let alfabeticamente=data.films.sort(function(a,b){
      if (a.title > b.title) {
          return 1;
      }        
      if (a.title < b.title) {
          return -1;
        }
        return 0
  });
  return alfabeticamente;
  }

/*Filtro por genero */
  export const filtroByGender = (data, gender) => {
    let personajesFiltrados = []; //almacenara lo que cumpla la condicion en la linea 62
    data.films.forEach(dataGhibli => { 
        dataGhibli.people.filter(personajes => {// parapoder acceder a las propiedades de personajes
           if(personajes.gender == gender){//condicion para que vigile que personajes son del genero que el usuario selecciono valor que se guarda en "gender"
            personajesFiltrados.push(personajes); 
           }
        })
    })
    //console.log(personajesFiltrados);
    return personajesFiltrados;
}
export const filtroBySpecie = (data, specie) => {
  let personajesFiltrados = []; //almacenara lo que cumpla la condicion en la linea 62
  data.films.forEach(dataGhibli => { 
      dataGhibli.people.filter(personajes => {// parapoder acceder a las propiedades de personajes
         if(personajes.specie == specie){//condicion para que vigile que personajes son del genero que el usuario selecciono valor que se guarda en "gender"
          personajesFiltrados.push(personajes); 
         }
      })
  })
  return personajesFiltrados;
}









