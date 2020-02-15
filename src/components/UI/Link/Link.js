import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = (props) => {
  return (
    <NavLink className={props.class} to={props.route} exact={props.exact}>{props.children}</NavLink>
  );
}

export default Link;