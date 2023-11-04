/*calcularEdad: recibe un string con la fecha de nacimiento 
y devuelve la edad en años o meses*/
export const calcularEdad = (fechaString) => {
  //Obtener milisegundos de fechaActual
  const fechaActual = new Date().getTime();

  //Obtener milisegundos de fechaString
  const [mes, anio] = fechaString.split("/");
  const fecha = new Date(anio, mes - 1);
  const milisegundos = fecha.getTime();

  //Calcular diferencia en milisegundos
  const diferenciaMilisegundos = fechaActual - milisegundos;

  //Calcular edad en meses
  const meses = Math.floor(
    diferenciaMilisegundos / (1000 * 60 * 60 * 24 * 30.44)
  );

  //Calcular edad en años
  const edad = Math.floor(meses / 12);

  //Retornar edad en años o meses
  return edad > 0 ? `${edad} años` : `${meses - edad * 12} meses`;
};

/*filterByAdoptionStatus: recibe un array de perros 
y devuelve un array con los perros que no están adoptados*/
export const filterByAdoptionStatus = (data) => {
  if (data) return data.filter((dog) => !dog.adoptionStatus);
};

/*filterDogs: recibe un array de perros y una categoría 
y devuelve un array de perros filtrado por categoría*/
export const filterDogs = (dogs, category) => {
  //Si la categoría es 'all' retorna todos los perros
  if (category === "all") return dogs;

  if (category === "females") return dogs.filter((dog) => dog.sex === "Hembra");

  if (category === "males") return dogs.filter((dog) => dog.sex === "Macho");

  if (category === "puppies")
    return dogs.filter((dog) => dog.petLifeStage === "Cachorro");
};
