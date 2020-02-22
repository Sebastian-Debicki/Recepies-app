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
        pattern={props.pattern}
        id={props.name}
        placeholder={props.name}
        value={props.value}
        min={props.min}
        max={props.max}
      />
      <label className="input__label" htmlFor={props.name}>{props.name}</label>
    </div>
  );
}

export default Input;