import React from 'react';

const Select = ({ changed, id, options, ...props }) => {
  const [open, setOpenState] = React.useState(false)
  const [selectedName, setSelectednNameState] = React.useState(id)

  const addClassOpenHandler = () => {
    setOpenState(!open)
  }
  const changeSelectValue = (option) => {
    setSelectednNameState(option)
    setOpenState(false)
    changed(option)
  }

  return (
    <div className={`select-box ${props.class}`}>
      <div className={open ? "select-box__options-container active" : "select-box__options-container"}>
        {options.map(option =>
          <div className="select-box__option" key={option} onClick={() => changeSelectValue(option)}>
            <input className="select-box__radio" type="radio" id={option} name="category" />
            <label className="select-box__label" htmlFor={option}>{option}</label>
          </div>
        )}
      </div>
      <div className="select-box__selected" onClick={addClassOpenHandler}>{selectedName}</div>
    </div>
  );
}

export default Select;