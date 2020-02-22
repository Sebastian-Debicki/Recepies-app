import React from 'react';

const Modal = (props) => {
  return (
    <div className={props.open ? 'container open' : 'container'}>
      <div className={props.open ? "backdrop open" : "backdrop"} onClick={props.closeModalHandler}></div>
      <div className={props.open ? "modal open" : "modal"}>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;