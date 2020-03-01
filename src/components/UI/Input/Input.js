import React from 'react';

const Input = ({ type, name, value, required, changed, maxLength, minLength, pattern, ...props }) => {

  return (
    <div className="input-box">
      <input
        className={props.class}
        type={type}
        required={required}
        onChange={changed}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        id={name}
        placeholder={name}
        value={value}
      />
      <label className="input__label" htmlFor={name}>{name}</label>
    </div>
  );
}

export default Input;