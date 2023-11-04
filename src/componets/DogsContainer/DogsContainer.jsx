import PropTypes from 'prop-types';
import Dog from "../Dog/Dog";
import './DogsContainer.css';

const DogsContainer = ({dogs}) => {

     
  return (
    <>
    {
      dogs.map((dog, index) => (
     
        <Dog dog={dog} key={index}/>
      ))
    }
    </>  
    
  )
}


DogsContainer.propTypes = {

  dogs: PropTypes.array.isRequired

}

export default DogsContainer