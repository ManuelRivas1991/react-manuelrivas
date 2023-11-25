const fechaActual = new Date().getTime();

export const calculateAge = (fechaString) => {
  const [mes, anio] = fechaString.split("/");
  const fecha = new Date(anio, mes - 1);
  const milisegundos = fecha.getTime();
  const diferenciaMilisegundos = fechaActual - milisegundos;

  //Calcular edad en meses
  const meses = Math.floor(
    diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 30.44)
  );

  //Calcular edad en años
  const edad = Math.floor(meses / 12);

  return edad > 0 ? `${edad} años` : `${meses - edad * 12} meses`;
};

const filters = {
  all: (dogs) => dogs,
  females: (dogs) => dogs.filter((dog) => dog.sex === "Hembra"),
  males: (dogs) => dogs.filter((dog) => dog.sex === "Macho"),
  puppies: (dogs) => dogs.filter((dog) => dog.petLifeStage === "Cachorro"),
};

export const filterDogs = (dogs, category) => {
  const filterFunction = filters[category] || filters.all;
  return filterFunction(dogs);
};
