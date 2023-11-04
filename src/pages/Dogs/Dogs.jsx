import RingLoader from "react-spinners/RingLoader";
import DogsContainer from "../../componets/DogsContainer/DogsContainer";
import { useParams } from "react-router-dom";
import environments from "../../environments/environments";
import "./Dogs.css";
import { useEffect, useState } from "react";
import { filterByAdoptionStatus, filterDogs } from "../../helpers/helpers";

const Dogs = () => {
  // Se desestructura la categoria de los parametros de la url
  const { category } = useParams();

  // dogs es un array que guarda todos los perros
  const [dogs, setDogs] = useState([]);
  // searchResult es un array que guarda los perros filtrados por categoria
  const [searchResult, setSearchResult] = useState([]);

  // getDogs es una funcion quw guarda los datos en el estado dogs
  const getDogs = async () => {
    try {
      const response = await fetch(environments.dogsUrl);
      const data = await response.json();
      // Se filtran los perros por estado de adopcion
      const result = filterByAdoptionStatus(data);
      setDogs(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // Se llama a la funcion getDogs para guardar los datos en el estado dogs
    getDogs();
  }, []);

  useEffect(() => {
    // Se llama a la funcion filterDogs para guardar los datos en el estado searchResult
    const result = filterDogs(dogs, category);
    setSearchResult(result);
  }, [dogs, category]);

  return (
    <main
      className={
        /*Si dogs tiene datos se aplica la clase dogs-container, 
        si no se aplica la clase spinner-container*/
        dogs.length > 0 ? "dogs-container" : "spinner-container"
      }
    >
      {
        /*Si dogs tiene datos se muestra el componente DogsContainer, 
            si no se muestra el componente RingLoader*/
        dogs.length > 0 ? (
          <DogsContainer
            // Se pasan los datos de los perros filtrados por categoria al componente DogsContainer
            dogs={searchResult}
          />
        ) : (
          <RingLoader color="#10B981" size={300} className="spinner" />
        )
      }
    </main>
  );
};

export default Dogs;
