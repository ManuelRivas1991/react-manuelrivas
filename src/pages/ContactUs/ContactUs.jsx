import Button from "../../componets/Button/Button";
import "./ContactUs.css";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <main className="contactUs-container">
      <h1>CONTACTA CON NOSOTROS</h1>
      <br />
      <p>
        Cuéntanos brevemente cómo podemos ayudarte y déjanos un teléfono de
        contacto. Nosotros te llamamos en un corto plazo de tiempo.
      </p>
      <br />
      <p>
        puedes contactarnos a través de correo electrónico para contarnos lo que
        necesites, o enviarnos información sobre casos de maltrato o abandono.
      </p>
      <br />
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Apellido</label>
          <input type="text" className="form-control" id="lastname" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Asunto</label>
          <input type="text" className="form-control" id="subject" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            className="form-control"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <Button buttonTitle={"Enviar"} handleClick={handleSubmit}></Button>
      </form>
    </main>
  );
};

export default ContactUs;
