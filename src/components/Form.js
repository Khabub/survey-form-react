import React from "react";
import useFormHook from "../hooks/useFormHook";
import Select from "react-select";
import { useState } from "react";

import classes from "./Form.module.scss";

const options = [
  { value: "Student", label: "Student" },
  { value: "Full Time Job", label: "Full Time Job" },
];

const Form = () => { 

  const {
    value: enteredName,
    isValid: enteredNameValid,
    hasError: enteredNameError,
    valueHandler: nameChangeHandler,
    touchHandler: nameBlurHandler,
    reset: enteredNameReset,
  } = useFormHook((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailValid,
    hasError: enteredEmailError,
    valueHandler: emailChangeHandler,
    touchHandler: emailBlurHandler,
    reset: enteredEmailReset,
  } = useFormHook((value) => value.trim().includes("@"));

  const {
    value: enteredAge,
    isValid: enteredAgeValid,
    hasError: enteredAgeError,
    valueHandler: ageChangeHandler,
    touchHandler: ageBlurHandler,
    reset: enteredAgeReset,
  } = useFormHook((value) => value.trim() !== "");

  const {        
    selected: selectedValue,
    isValid: enteredRoleValid,
    hasError: enteredRoleError,
    selectHandler: roleChangeHandler,
    touchHandler: roleBlurHandler,
    reset: enteredRoleReset    
  } = useFormHook((value) => value !== "");

  // Použít pokud buduchtí mít disabled submit button (disabled={!formIsValid})
  let formIsValid = false;
  if (enteredNameValid && enteredEmailValid && enteredRoleValid) {
    formIsValid = true;
  }

  const submitForm = (event) => {
    event.preventDefault();

    if (
      !enteredNameValid &&
      !enteredEmailValid &&
      !enteredAgeValid &&
      !enteredRoleValid
    ) {
      console.log("Submit error. Not submitted. Check fields.");
    } else {
      console.log("Submitting...");
    }

    enteredNameReset();
    enteredEmailReset();
    enteredAgeReset();
    enteredRoleReset();
  };

  return (
    <form className={classes.container} onSubmit={submitForm}>
      <div className={classes.name}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {enteredNameError && (
          <p className={classes.error}>CHYBA - empty field</p>
        )}
      </div>

      <div className={classes.email}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailError && (
          <p className={classes.error}>CHYBA - missing @</p>
        )}
      </div>

      <div className={classes.age}>
        <label htmlFor="age">Age (optional)</label>
        <input
          type="number"
          id="age"
          onChange={ageChangeHandler}
          onBlur={ageBlurHandler}
          value={enteredAge}
          min={15}
          max={99}
        />
        {enteredAgeError && <p className={classes.error}>CHYBA</p>}
      </div>

      <div className={classes.role}>
        <label htmlFor="role">
          Which option best describes your current role?
        </label>
        <Select                  
          options={options}
          onChange={roleChangeHandler}
          onBlur={roleBlurHandler}  
          value={selectedValue}    
          placeholder="Select current role"    
        />
        {enteredRoleError && <p className={classes.error}>Choose something</p>}        
      </div>

      <div>
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
