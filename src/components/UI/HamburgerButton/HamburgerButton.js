import React from 'react';

const HamburgerButton = (props) => {
  return (
    <button className={props.open ? "hamburger open" : "hamburger"} onClick={props.clicked}>
      <div className={props.open ? "hamburger__box open" : "hamburger__box"} >
        <span className={props.open ? 'hamburger__item hamburger__item--1 open' : 'hamburger__item hamburger__item--1'}></span>
        <span className={props.open ? 'hamburger__item hamburger__item--2 open' : 'hamburger__item hamburger__item--2'}></span>
        <span className={props.open ? 'hamburger__item hamburger__item--3 open' : 'hamburger__item hamburger__item--3'}></span>
      </div>
    </button>
  );
}

export default HamburgerButton;