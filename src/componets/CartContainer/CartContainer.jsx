import CartItem from "../CartItem/CartItem";
import Button from "../../componets/Button/Button";
import "./CartContainer.css";

const CartContainer = ({ cart, deleteDogtById }) => {
  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <form className="cartContainer">
      <section>
        <h1>Lista de adopción</h1>
        <p>Estos son los perritos que vas a adoptar</p>

        <ul className="responsive-table">
          <li className="table-header">
            <div>Foto</div>
            <div>Nombre</div>
            <div>Quitar</div>
          </li>
          {cart.map((dog) => (
            <CartItem key={dog.id} dog={dog} deleteDogtById={deleteDogtById} />
          ))}
        </ul>
      </section>

      <section>
        <h2>Formulario de adopción</h2>
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

export default CartContainer;
