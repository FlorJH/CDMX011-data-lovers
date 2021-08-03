// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const filtroDirector= (data, selectDirector) => {
  let filtro;
  if(selectDirector == 1){
    filtro= data.films.filter(function(dir){
      return dir.director;//selectDirector es la variable del listboxs
  })
  }else{
   filtro=data.films.filter(function(dir){
    return dir.director == selectDirector;//selectDirector es la variable del listboxs
})}
return filtro;
};


/*export const orderByAZ=(data){
  alfabeticamenteAB=data.films.map(function(movies) { // az
    return movies.title.sort();
 });
};*/


//export const filterRotten()=>{};



