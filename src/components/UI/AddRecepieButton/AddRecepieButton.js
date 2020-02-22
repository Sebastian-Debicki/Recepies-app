import React from 'react';

const AddRecepieButton = (props) => {
  return (
    <button className={props.open ? "add-button open" : "add-button"} onClick={props.clicked}>
      <div className="add-button__box" >
        +
      </div>
    </button>
  );
}

export default AddRecepieButton;