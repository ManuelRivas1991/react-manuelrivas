import PropTypes from "prop-types";
import CartItem from "../CartItem/CartItem";
import Button from "../../componets/Button/Button";
import "./CartContainer.css";

const CartContainer = ({ cart, deleteDogById }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <form className="cartContainer">
      <section>
        <h1>Lista de adopción</h1>
        <p>Estos son los perritos que quieres adoptar</p>

        <ul className="responsive-table">
          <li className="table-header">
            <div>Foto</div>
            <div>Nombre</div>
            <div>Quitar</div>
          </li>
          {cart.map((dog) => (
            <CartItem key={dog.id} dog={dog} deleteDogById={deleteDogById} />
          ))}
        </ul>
      </section>

      <section>
        <h2>Para iniciar el proceso de adopción</h2>
        <p>Por favor, completa el siguiente formulario:</p>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Apellido</label>
          <input type="text" className="form-control" id="lastname" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input type="text" className="form-control" id="phone" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Dirección</label>
          <input type="text" className="form-control" id="address" />
        </div>
        <div className="form-group">
          <label htmlFor="postalcode">Código postal</label>
          <input type="text" className="form-control" id="postalcode" />
        </div>

        <Button buttonTitle={"Enviar"} handleClick={handleSubmit}></Button>
      </section>
    </form>
  );
};

CartContainer.propTypes = {
  cart: PropTypes.array.isRequired,
  deleteDogById: PropTypes.func.isRequired,
};

export default CartContainer;
