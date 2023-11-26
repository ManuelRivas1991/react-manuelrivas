const fechaActual = new Date();

export const calculateAge = (fechaString) => {
  const [mes, anio] = fechaString.split("/");
  const fecha = new Date(anio, mes - 1);

  //Calcular edad en meses
  const meses =
    (fechaActual.getFullYear() - fecha.getFullYear()) * 12 +
    (fechaActual.getMonth() - fecha.getMonth());

  //Calcular edad en años
  const edad = Math.floor(meses / 12);

  return edad > 0 ? `${edad} años` : `${meses} meses`;
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

export const upDateLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
