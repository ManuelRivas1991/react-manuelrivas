7
import { MdMenu } from "react-icons/md";
import { FaPaw } from "react-icons/fa6";
import CartWidget from "../../componets/CartWidget/CartWidget";
import PropTypes from 'prop-types';
import './Header.css';
import NavBar from "../NavBar/NavBar";

const Header = ({
  setasideStatus, 
  asideStatus,
  adoptedDogsLength
}) => {
  
  return (
    <header className="header-container">

      <div className="menu-icon">
        
        <MdMenu 
        size={40} 
        className="menu-icon__mdmenu"
        // Se modifica el estado de asideStatus a su valor contrario al hacer click en el icono
        onClick={()=>setasideStatus(!asideStatus)}
        />

        <NavBar 
          // Se pasa la funcion setasideStatus como prop para que se ejecute al hacer click en un NavLink
          setasideStatus={setasideStatus} 
        />
      
      </div>

      <div className="logo">
        <span>Adopción</span>
        <FaPaw size={45} fill={"#10B981"}/>
        <span>Responsable</span>
      </div> 
            
      <div 
        className="cart-widget-container" 
        // Se modifica el estado de asideStatus a false para que se cierre el aside al hacer click en el CartWidget
        onClick={()=>setasideStatus(false)}
      >
        <CartWidget 
          // Se pasa la cantidad de perros adoptados como prop
          adoptedDogsLength={adoptedDogsLength}
        />
      </div>
    </header>
  )
}


Header.propTypes = {
  setasideStatus: PropTypes.func.isRequired,
  asideStatus: PropTypes.bool.isRequired,
  adoptedDogsLength: PropTypes.number.isRequired
  }

export default Header