import React from 'react';

const Input = (props) => {
  return (
    <div className="input-box">
      <input
        className={props.class}
        type={props.type}
        required={props.required}
        onChange={props.changed}
        maxLength={props.maxLength}
        minLength={props.minLength}
        pattern="^\S+$"
        id={props.type}
        placeholder={props.type}
      />
      <label className="input__label" htmlFor={props.type}>{props.type}</label>
    </div>
  );
}

export default Input;