import React from "react";
import useFormHook from "../hooks/useFormHook";
import Select from "react-select";
import { options, customStyles, optionsFeature } from "../store/select";

import classes from "./Form.module.scss";

const Form = () => {
  // Name
  const {
    value: enteredName,
    isValid: enteredNameValid,
    hasError: enteredNameError,
    valueHandler: nameChangeHandler,
    touchHandler: nameBlurHandler,
    reset: enteredNameReset,
  } = useFormHook((value) => value.trim() !== "");

  // Email
  const {
    value: enteredEmail,
    isValid: enteredEmailValid,
    hasError: enteredEmailError,
    valueHandler: emailChangeHandler,
    touchHandler: emailBlurHandler,
    reset: enteredEmailReset,
  } = useFormHook((value) => value.trim().includes("@"));

  // Age
  const {
    value: enteredAge,
    isValid: enteredAgeValid,
    hasError: enteredAgeError,
    valueHandler: ageChangeHandler,
    touchHandler: ageBlurHandler,
    reset: enteredAgeReset,
  } = useFormHook((value) => value.trim() !== "");

  // Role select
  const {
    selected: selectedValue,
    isValid: enteredRoleValid,
    hasError: enteredRoleError,
    selectHandler: roleChangeHandler,
    touchHandler: roleBlurHandler,
    reset: enteredRoleReset,
  } = useFormHook((value) => value !== "");

  // Recommend radio
  const {
    value: recommendValue,
    isValid: enteredRecommendValid,
    hasError: enteredRecommendError,
    valueHandler: recommendChangeHandler,
    touchHandler: recommendBlurHandler,
    reset: enteredRecommendReset,
  } = useFormHook((value) => value !== "");

  // Feature select
  const {
    selected: selectedFeatureValue,
    isValid: enteredFeatureValid,
    hasError: enteredFeatureError,
    selectHandler: featureChangeHandler,
    touchHandler: featureBlurHandler,
    reset: enteredFeatureReset,
  } = useFormHook((value) => value !== "");

    // Improved
    const {
      improve: improvedValue,
      improveHandler: improvedChangeHandler,
      touchHandler: improvedBlurHandler,
      reset: enteredImprovedReset,
    } = useFormHook((value) => value !== "");

  // Použít pokud buduchtí mít disabled submit button (disabled={!formIsValid})
  let formIsValid = false;
  if (
    enteredNameValid &&
    enteredEmailValid &&
    enteredRoleValid &&
    enteredFeatureValid &&
    enteredRecommendValid
  ) {
    formIsValid = true;
  }

  const submitForm = (event) => {
    event.preventDefault();

    if (
      !enteredNameValid &&
      !enteredEmailValid &&
      !enteredAgeValid &&
      !enteredRoleValid &&
      !enteredFeatureValid &&
      !enteredRecommendValid
    ) {
      console.log("Submit error. Not submitted. Check fields.");
    } else {
      console.log("Submitting...");
      console.log(`Name: ${enteredName}`);
      console.log(`Email: ${enteredEmail}`);
      console.log(`Age: ${enteredAge}`);
      console.log(`Role: ${selectedValue}`);
      console.log(`Recommend: ${recommendValue}`);
      console.log(`Feature: ${selectedFeatureValue}`);
      console.log(`Improved: ${improvedValue}`);
    }

    enteredNameReset();
    enteredEmailReset();
    enteredAgeReset();
    enteredRoleReset();
    enteredRecommendReset();
    enteredFeatureReset();
    enteredImprovedReset();
  };

  return (
    <form className={classes.container} onSubmit={submitForm}>
      {/* --- Name --- */}
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

      {/* --- Email --- */}
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

      {/* --- Age --- */}
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

      {/* --- Role --- */}
      <div className={classes.role}>
        <label htmlFor="role">
          Which option best describes your current role?
        </label>
        <Select
          className={classes.select}
          styles={customStyles}
          options={options}
          onChange={roleChangeHandler}
          onBlur={roleBlurHandler}
          value={options.filter((obj) => obj.value === selectedValue)}
          placeholder="Select current role"
        />
        {enteredRoleError && <p className={classes.error}>Choose something</p>}
      </div>

      {/* --- Recommend --- */}
      <div className={classes.recommend}>
        <label htmlFor="recommend">
          Would you recommend freeCodeCamp to a friend?
        </label>
        <div>
          <input
            type="radio"
            id="definitely"
            name="recommendName"
            onChange={recommendChangeHandler}
            onBlur={recommendBlurHandler}
            value="Definitely"                    
          />
          <label htmlFor="definitely">Definitely</label>
        </div>
        <div>
          <input
            type="radio"
            id="maybe"
            name="recommendName"
            onChange={recommendChangeHandler}
            onBlur={recommendBlurHandler}
            value="Maybe"
          />
          <label htmlFor="maybe">Maybe</label>
        </div>
        <div>
          <input
            type="radio"
            id="notsure"
            name="recommendName"
            onChange={recommendChangeHandler}
            onBlur={recommendBlurHandler}
            value="Not Sure"
          />
          <label htmlFor="notsure">Not Sure</label>
        </div>
        {enteredRecommendError && <p className={classes.error}>Choose something</p>}
      </div>

      {/* --- Feature --- */}
      <div className={classes.feature}>
        <label htmlFor="feature">
          What is your favorite feature of freeCodeCamp?
        </label>
        <Select
          className={classes.select}
          styles={customStyles}
          options={optionsFeature}
          onChange={featureChangeHandler}
          onBlur={featureBlurHandler}
          value={optionsFeature.filter(
            (obj) => obj.value === selectedFeatureValue
          )}
          placeholder="Select an option"
        />
        {enteredFeatureError && (
          <p className={classes.error}>Choose something</p>
        )}
      </div>

      {/* --- Improved --- */}
      <div className={classes.improved}>
        <label htmlFor="improved">
        What would you like to see improved? (Check all that apply)
        </label>

        <div>
          <input
            type="checkbox"
            id="frontend"            
            onChange={improvedChangeHandler}
            onBlur={improvedBlurHandler}
            value="Front-end Projects"            
          />
          <label htmlFor="frontend">Front-end Projects</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="backend"            
            onChange={improvedChangeHandler}
            onBlur={improvedBlurHandler}
            value="Back-end Projects"            
          />
          <label htmlFor="backend">Back-end Projects</label>
        </div>

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
