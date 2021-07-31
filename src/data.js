// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const FiltroDirector= (data, selectDirector) => {
  var filtro=data.films.filter(function(dir){
    //console.log(dir.director);
    return dir.director == selectDirector;//selectDirector es la variable del listboxs
})
return filtro;
};



