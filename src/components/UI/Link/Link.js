import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({ route, exact, children, ...props }) => {
  return (
    <NavLink className={props.class} to={route} exact={exact}>{children}</NavLink>
  );
}

export default Link;