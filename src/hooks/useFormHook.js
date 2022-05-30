import { useState } from "react";

const useFormHook = (props) => {
  const [value, setValue] = useState("");
  const [touch, setTouch] = useState(false);
  const [selected, setSelected] = useState(null);
  const [improve, setImprove] = useState([]);

  const isValid = props(value);
  const hasError = !isValid && touch;

  const valueHandler = (event) => {
    setValue(event.target.value);    
  };

  const selectHandler = (event) => {
    setSelected(event.value);
    setValue(true);
  };

  const improveHandler = (event) => {
    const { value, checked } = event.target;
    const improvement = [...improve];

    if (checked) {
      setImprove([...improvement, value]);
    } else {
      setImprove(improvement.filter((e) => e !== value));
    }
  };

  const touchHandler = () => {
    setTouch(true);
  };

  const reset = () => {
    setValue("");
    setTouch(false);
    setSelected(null);
    setImprove([]);
  };

  return {
    value,
    isValid,
    hasError,
    valueHandler,
    touchHandler,
    reset,
    selectHandler,
    improveHandler,
    selected,
    improve,
  };
};

export default useFormHook;
