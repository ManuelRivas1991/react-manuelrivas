import PropTypes from 'prop-types';
import Dog from "../Dog/Dog";
import './DogsContainer.css';

const DogsContainer = ({dogs, setAdoptedDogs}) => {

     
  return (
    <>
    {
      dogs.map((dog, index) => (
        // Se pasa el perro y la función setAdoptedDogs al componente Dog
        <Dog dog={dog} key={index} setAdoptedDogs={setAdoptedDogs}/>
      ))
    }
    </>  
    
  )
}


DogsContainer.propTypes = {

  dogs: PropTypes.array.isRequired,
  setAdoptedDogs: PropTypes.func.isRequired

}

export default DogsContainer