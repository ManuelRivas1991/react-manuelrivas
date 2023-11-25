import RingLoader from "react-spinners/RingLoader";
import DogsContainer from "../../componets/DogsContainer/DogsContainer";
import { useParams } from "react-router-dom";
import environments from "../../environments/environments";
import { useEffect, useState } from "react";
import { filterDogs } from "../../helpers/helpers";
import "./Dogs.css";

const Dogs = () => {
  const { category } = useParams();
  const [dogs, setDogs] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const getDogs = async () => {
    try {
      const response = await fetch(environments.dogsUrl);
      const data = await response.json();
      setDogs(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDogs();
  }, []);

  useEffect(() => {
    const result = filterDogs(dogs, category);
    setSearchResult(result);
  }, [dogs, category]);

  return (
    <main className={dogs.length > 0 ? "dogs-container" : "spinner-container"}>
      {dogs.length > 0 ? (
        <DogsContainer dogs={searchResult} />
      ) : (
        <RingLoader color="#10B981" size={300} className="spinner" />
      )}
    </main>
  );
};

export default Dogs;
