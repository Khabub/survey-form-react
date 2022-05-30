import React from "react";
import useFormHook from "../hooks/useFormHook";
import Select from "react-select";
import {
  options,
  customStyles,
  optionsFeature,
  improvedList,
} from "../store/select";
import ImprovedList from "./ImprovedList";

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

  // Text area
  const {
    value: enteredTextarea,
    valueHandler: textareaChangeHandler,
    touchHandler: textareaBlurHandler,
    reset: enteredTextareaReset,
  } = useFormHook((value) => value.trim() !== "");

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
      console.log(`Text area: ${enteredTextarea}`);
    }

    enteredNameReset();
    enteredEmailReset();
    enteredAgeReset();
    enteredRoleReset();
    enteredRecommendReset();
    enteredFeatureReset();
    enteredImprovedReset();
    enteredTextareaReset();
  };

  let impList = improvedList.map((item) => (
    <ImprovedList
      key={item.id}
      id={item.idname}
      onChange={improvedChangeHandler}
      onBlur={improvedBlurHandler}
      value={item.name}
    >
      {item.name}
    </ImprovedList>
  ));

  return (
    <form className={classes.container} onSubmit={submitForm}>
      {/* --- Name --- */}
      <div className={classes.heading}>
        <label className={classes.labelName} htmlFor="name">
          Name
        </label>
        <input
          className={
            enteredNameError
              ? `${classes.inputName} ${classes.errorNOK}`
              : `${classes.inputName} ${classes.errorOK}`
          }
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {enteredNameError && (
          <span className={classes.errorName}>CHYBA - empty field</span>
        )}
      </div>

      {/* --- Email --- */}
      <div className={classes.heading}>
        <label className={classes.labelName} htmlFor="email">
          Email
        </label>
        <input
          className={
            enteredEmailError
              ? `${classes.inputName} ${classes.errorNOK}`
              : `${classes.inputName} ${classes.errorOK}`
          }
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailError && (
          <span className={classes.errorEmail}>CHYBA - missing @</span>
        )}
      </div>

      {/* --- Age --- */}
      <div className={classes.heading}>
        <label className={classes.labelName} htmlFor="age">
          Age (optional)
        </label>
        <input
          className={
            enteredAgeError
              ? `${classes.inputName} ${classes.errorNOK}`
              : `${classes.inputName} ${classes.errorOK}`
          }
          type="number"
          id="age"
          onChange={ageChangeHandler}
          onBlur={ageBlurHandler}
          value={enteredAge}
          min={15}
          max={99}
        />
        {enteredAgeError && (
          <span className={classes.errorAge}>CHYBA - age not filled</span>
        )}
      </div>

      {/* --- Role --- */}
      <div className={classes.heading}>
        <label className={classes.labelName} htmlFor="role">
          Which option best describes your current role?
        </label>
        <Select
          className={
            enteredRoleError
              ? `${classes.inputNameRole} ${classes.errorNOK}`
              : `${classes.inputNameRole} ${classes.errorOK}`
          }
          styles={customStyles}
          options={options}
          onChange={roleChangeHandler}
          onBlur={roleBlurHandler}
          value={options.filter((obj) => obj.value === selectedValue)}
          placeholder="Select current role"
        />
        {enteredRoleError && (
          <span className={classes.errorRole}>Choose something</span>
        )}
      </div>

      {/* --- Recommend --- */}
      <div className={classes.heading}>
        <label className={classes.labelName} htmlFor="recommend">
          Would you recommend freeCodeCamp to a friend?
        </label>
        <div>
          <input
            className={classes.recommend}
            type="radio"
            id="recommend"
            name="recommendName"
            onChange={recommendChangeHandler}
            onBlur={recommendBlurHandler}
            value="Definitely"
          />
          <label className={classes.labelName} htmlFor="definitely">Definitely</label>
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
        {enteredRecommendError && (
          <p className={classes.error}>Choose something</p>
        )}
      </div>

      {/* --- Feature --- */}
      <div className={classes.heading}>
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
      <div className={classes.heading}>
        <label htmlFor="improved">
          What would you like to see improved? (Check all that apply)
        </label>
        {impList}
      </div>

      {/* --- Comments --- */}
      <div className={classes.heading}>
        <label htmlFor="comments">Any comments or suggestions?</label>
        <textarea
          id="comments"
          name="comments"
          placeholder="Leave a comment here"
          onChange={textareaChangeHandler}
          onBlur={textareaBlurHandler}
          value={enteredTextarea}
        ></textarea>
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
