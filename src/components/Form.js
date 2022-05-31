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
    touch: touchName,
  } = useFormHook((value) => value.trim() !== "");

  // Email
  const {
    value: enteredEmail,
    isValid: enteredEmailValid,
    hasError: enteredEmailError,
    valueHandler: emailChangeHandler,
    touchHandler: emailBlurHandler,
    reset: enteredEmailReset,
    touch: touchEmail,
  } = useFormHook((value) => value.trim().includes("@"));

  // Age
  const {
    value: enteredAge,
    isValid: enteredAgeValid,
    hasError: enteredAgeError,
    valueHandler: ageChangeHandler,
    touchHandler: ageBlurHandler,
    reset: enteredAgeReset,
    touch: touchAge,
  } = useFormHook((value) => value.trim() !== "");

  // Role select
  const {
    selected: selectedValue,
    isValid: enteredRoleValid,
    hasError: enteredRoleError,
    selectHandler: roleChangeHandler,
    touchHandler: roleBlurHandler,
    reset: enteredRoleReset,
    touch: touchRole,
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
      className={classes.improvedBox}
    >
      {item.name}
    </ImprovedList>
  ));

  const classNameNeutral = !touchName
    ? `${classes.errorNeutral}`
    : enteredNameError
    ? `${classes.errorNOK}`
    : `${classes.errorOK}`;

  const classEmailNeutral = !touchEmail
    ? `${classes.errorNeutral}`
    : enteredEmailError
    ? `${classes.errorNOK}`
    : `${classes.errorOK}`;

  const classAgeNeutral = !touchAge
    ? `${classes.errorNeutral}`
    : enteredAgeError
    ? `${classes.errorNOK}`
    : `${classes.errorOK}`;

  const classRoleNeutral = !touchRole
    ? `${classes.errorNeutral}`
    : enteredRoleError
    ? `${classes.errorNOK}`
    : `${classes.errorOK}`;

  return (
    <form className={classes.container} onSubmit={submitForm}>
      {/* --- Name --- */}
      <div className={classes.heading}>
        <label className={classes.labelName} htmlFor="name">
          Name
        </label>
        <input
          className={`${classes.inputName} ${classNameNeutral}`}
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
          className={`${classes.inputName} ${classEmailNeutral}`}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailError && (
          <span className={classes.errorName}>CHYBA - missing @</span>
        )}
      </div>

      {/* --- Age --- */}
      <div className={classes.heading}>
        <label className={classes.labelName} htmlFor="age">
          Age (optional)
        </label>
        <input
          className={`${classes.inputName} ${classAgeNeutral}`}
          type="number"
          id="age"
          onChange={ageChangeHandler}
          onBlur={ageBlurHandler}
          value={enteredAge}
          min={15}
          max={99}
        />
        {enteredAgeError && (
          <span className={classes.errorName}>CHYBA - age not filled</span>
        )}
      </div>

      {/* --- Role --- */}
      <div className={classes.heading}>
        <label className={classes.labelNameRole} htmlFor="role">
          Which option best describes your current role?
        </label>
        <Select
          className={`${classes.inputNameRole} ${classRoleNeutral}`}
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
        <label className={classes.labelNameRecommend} htmlFor="recommend">
          Would you recommend freeCodeCamp to a friend?
        </label>
        <div className={classes.recommendBox}>
          <input
            type="radio"
            id="recommend"
            name="recommendName"
            onChange={recommendChangeHandler}
            onBlur={recommendBlurHandler}
            value="Definitely"
          />
          <label htmlFor="definitely">Definitely</label>
        </div>
        <div className={classes.recommendBox}>
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
        <div className={classes.recommendBox}>
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
          <span className={classes.error}>Choose something</span>
        )}
      </div>

      {/* --- Feature --- */}
      <div className={classes.heading}>
        <label className={classes.labelNameFeature} htmlFor="feature">
          What is your favorite feature of freeCodeCamp?
        </label>
        <Select
          className={
            enteredRoleError
              ? `${classes.inputNameFeature} ${classes.errorNOK}`
              : `${classes.inputNameFeature} ${classes.errorOK}`
          }
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
          <span className={classes.errorFeature}>Choose something</span>
        )}
      </div>

      {/* --- Improved --- */}
      <div className={classes.heading}>
        <label className={classes.labelNameImproved} htmlFor="improved">
          What would you like to see improved? (Check all that apply)
        </label>
        <div className={classes.improvedBox}> {impList}</div>
      </div>

      {/* --- Comments --- */}
      <div className={classes.heading}>
        <label className={classes.labelNameComment} htmlFor="comments">
          Any comments or suggestions?
        </label>
        <textarea
          className={classes.textComments}
          id="comments"
          name="comments"
          placeholder="Leave a comment here"
          onChange={textareaChangeHandler}
          onBlur={textareaBlurHandler}
          value={enteredTextarea}
        ></textarea>
      </div>

      <div>
        <button
          className={formIsValid ? classes.buttonOK : classes.buttonNOK}
          type="submit"
          disabled={!formIsValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
