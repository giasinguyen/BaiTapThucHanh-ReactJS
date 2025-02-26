import { useState } from "react";
import Button from "./Button";

function ChangeColorButton() {
  const [inputValue, setInputValue] = useState("");
  const [colorClass, setColorClass] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setColorClass(inputValue);
  };

  return (
    <>
      <input 
        type="text" 
        placeholder="primary, danger, success" 
        onChange={handleChange} 
      />
      <Button className={colorClass} onClick={handleClick} />
    </>
  );
}

export default ChangeColorButton;
