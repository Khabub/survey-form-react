import { useState } from "react";

const useFormHook = (props) => {
  const [value, setValue] = useState("");
  const [touch, setTouch] = useState(false);
  const [selected, setSelected] = useState(null);

  const isValid = props(value);
  // const isSelectValid = selected !== null;
  const hasError = !isValid && touch;

  const valueHandler = (event) => {
    setValue(event.target.value);
  };

  const selectHandler = () => { 
    setValue(true);   
    setSelected();
  };

  const touchHandler = () => {
    setTouch(true);
  };

  const reset = () => {
    setValue("");
    setTouch(false);
    setSelected(null);
  };

  return {
    value,
    isValid,
    // isSelectValid,
    hasError,
    valueHandler,
    touchHandler,
    reset,
    selectHandler,
    selected,
  };
};

export default useFormHook;
