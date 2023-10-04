import { NavLink } from "react-router-dom";
import './Aside.css';
import PropTypes from 'prop-types';
import  NavBar from "../NavBar/NavBar";


const Aside = (
  {

    asideStatus,
    setasideStatus

  }) => {
  return (
    
    <aside 
      className = {
        /*Si asideStatus es true se aplica la clase active, 
         si no se aplica la clase disabled*/
        `aside-container ${asideStatus ? 'active' : 'disabled'}`
        } 
    >
      <header>
        <span>Adopción</span>
        <span>Responsable</span>
      </header>

      <hr />
                
      <NavBar 
        /* Se pasa la funcion setasideStatus como prop 
        para que se ejecute al hacer click en un NavLink*/
        setasideStatus={setasideStatus} 
      />

      <hr />
      
      <section className="aside-container__allDogs">
        <NavLink to="/dogs/all"
          /* Se modifica el estado de asideStatus a false 
          para que se cierre el aside al hacer click en el NavLink*/
          onClick={()=>setasideStatus(false)}
        >
          Mostrar Todos
        </NavLink>
      </section>

      <hr />

      <section>
        <h4>
          <strong>
            Filtrar por:
          </strong>
        </h4>
          
        <div>
      
          {/* Se modifica el estado de asideStatus a false 
          para que se cierre el aside al hacer click en el NavLink */}
          <NavLink 
            to="/dogs/females" 
            onClick={()=>setasideStatus(false)}
          >
            Hembras
          </NavLink>

          <NavLink 
            to="/dogs/males" 
            onClick={()=>setasideStatus(false)}
          >
            Machos
          </NavLink> 
            
          <NavLink 
            to="/dogs/puppies"
            onClick={()=>setasideStatus(false)}
          >
            Cachorros
          </NavLink>
            
        </div>

      </section>
      
      <hr />
      
    </aside>
  )
}

Aside.propTypes = {
  asideStatus: PropTypes.bool.isRequired,
  setasideStatus: PropTypes.func.isRequired
  }


export default Aside