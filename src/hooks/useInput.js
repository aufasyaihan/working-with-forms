import { useState } from "react";

export default function useInput(initialValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(initialValue);

  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur(event) {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
