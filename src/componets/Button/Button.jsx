import "./Button.css";

function Button({handleClick, buttonTitle}) {
  return (
    <button onClick={handleClick} className="button-primary">
      {buttonTitle}
    </button>
  );
}

export default Button; // Esto sirve para exportar mi componente y que pueda ser reutilizado o usado donde se requiera
