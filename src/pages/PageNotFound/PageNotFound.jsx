import { useNavigate } from "react-router-dom";
import Button from "../../componets/Button/Button";
import "./PageNotFound.css";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <main className="pageNotFound-container">
      <h1>404</h1>
      <h2>Parece que estás perdido</h2>
      <h3>¡La página que estás buscando no está disponible!</h3>
      <Button buttonTitle={"Atrás"} handleClick={()=> navigate(-1)}></Button>
    </main>
  );
};

export default PageNotFound;
