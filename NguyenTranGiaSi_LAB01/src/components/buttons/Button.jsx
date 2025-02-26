/* eslint-disable react/prop-types */
import './Button.css';
function Button({className, onClick }) {
    return (
      <input
        type="button"
        value="Click me"
        className={className}
        onClick={onClick}
      />
    );
  }

export default Button;
