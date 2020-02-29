import React from 'react';

const Modal = ({ open, closeModalHandler, children }) => {
  return (
    <div className={open ? 'container open' : 'container'}>
      <div className={open ? "backdrop open" : "backdrop"} onClick={closeModalHandler}></div>
      <div className={open ? "modal open" : "modal"}>
        <button onClick={closeModalHandler} className="btn"><span className="modal__close-icon">+</span></button>
        {children}
      </div>
    </div>
  );
}

export default Modal;