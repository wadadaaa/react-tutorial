import React from "react";
import "./input.scss";

const Input = props => {
  return (
    <div className="input-group">
      <label className="input-title">{props.title}</label>
      <input
        className="input-text"
        type="text"
        name={props.name}
        value={props.value} 
        onChange={props.onChange}       
      />
    </div>
  );
};

export default Input;
