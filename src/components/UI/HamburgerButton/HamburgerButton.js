import React from 'react';

const HamburgerButton = ({ open, clicked }) => {
  return (
    <button className={open ? "hamburger open" : "hamburger"} onClick={clicked}>
      <div className={open ? "hamburger__box open" : "hamburger__box"} >
        <span className={open ? 'hamburger__item hamburger__item--1 open' : 'hamburger__item hamburger__item--1'}></span>
        <span className={open ? 'hamburger__item hamburger__item--2 open' : 'hamburger__item hamburger__item--2'}></span>
        <span className={open ? 'hamburger__item hamburger__item--3 open' : 'hamburger__item hamburger__item--3'}></span>
      </div>
    </button>
  );
}

export default HamburgerButton;