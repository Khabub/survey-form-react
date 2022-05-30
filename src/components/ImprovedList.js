import React from "react";
// import classes from "";

const ImprovedList = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}        
      ></input>
      <label htmlFor={props.id}>{props.children}</label>
    </div>
  );
};

export default ImprovedList;
