import React from 'react';

const AddRecepieButton = ({ open, clicked }) => {
  return (
    <button className={open ? "add-button open" : "add-button"} onClick={clicked}>
      <div className="add-button__box" >
        +
      </div>
    </button>
  );
}

export default AddRecepieButton;