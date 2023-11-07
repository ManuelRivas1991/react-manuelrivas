import PropTypes from "prop-types";
import "./Button.css";

function Button({ handleClick, buttonTitle }) {
  return (
    <button onClick={handleClick} className="button-primary">
      {buttonTitle}
    </button>
  );
}

Button.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
