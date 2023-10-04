import PropTypes from 'prop-types';
import './Dog.css'
import { FaShieldDog } from "react-icons/fa6";
import { calcularEdad } from '../../helpers/helpers';

const Dog = ({dog, setAdoptedDogs}) => {

  /* addDog es una función que se ejecuta cuando se hace click en el artículo,
     en este caso cada articulo representa a un perro en adopción.
     addDog se encarga de agregar el perro a la lista de adopción.*/
const addDog = () =>{

  // Verificamos si el perro ya está en la lista de adopción
  // Si no hay datos en el localStorage, se crea un array vacío
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const exist = cart.some(d => d.id === dog.id);

  // Si el perro ya está en la lista, mostramos un mensaje y no hacemos nada más
  if (exist) {
    alert(`Ya tienes a ${dog.name} en la lista`);
    return;
  }

  // Si el perro no está en la lista, preguntamos si se desea agregar
  if(confirm(`¿Deseas solicitar la adopción de ${dog.name}?`)){
    // Si se desea agregar, agregamos el perro a la lista
    const result =[...cart, dog]
    // Guardamos la lista en el estado
    setAdoptedDogs(result)
    // Guardamos la lista de adopción en el localStorage
    localStorage.setItem('cart', JSON.stringify(result))
  }
}
  return ( 
  <article 
  className="dog-card" 
  // el evento onClick añade el perro a la lista de adopción
  onClick={addDog}
  >
      
      <img className="dog-card__image" src={dog.img} alt="" />

      <section> 
        <div className="dog-card__info">
          <span>
            <strong>{dog.name}</strong>
          </span>
          <hr />
          <span>{dog.sex} {dog.petLifeStage}</span>
          <span>Tamaño {dog.size}</span>
          <span>{dog.character}</span>
          <span>Edad: {
            /*Calculamos la edad del perro con la función calcularEdad, 
              si la edad es menor a un año se muestra en meses*/
            calcularEdad(dog.birthdate)
            }</span>
        </div>

        <div className='dog-card__click'>
          <FaShieldDog size={40} />
          <span>Click para Adoptar</span>
        </div>

      </section>

  </article>
  )
}

Dog.propTypes = {
    dog: PropTypes.shape({
      
      name: PropTypes.string.isRequired,
      sex: PropTypes.string.isRequired,
      petLifeStage: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      birthdate: PropTypes.string.isRequired,
      adoptionStatus: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired
      
    }).isRequired,
    setAdoptedDogs: PropTypes.func.isRequired
  }

  export default Dog