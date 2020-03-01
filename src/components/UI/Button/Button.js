import React from 'react';

const Button = ({ clicked, children, ...props }) => {
  return (
    <button className={props.class} onClick={clicked} >{children}</button>
  );
}

export default Button;