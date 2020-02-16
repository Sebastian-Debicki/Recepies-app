import React from 'react';
import LogOutNav from './LogOutNav/LogOutNav';
import LogInNav from './LogInNav/LogInNav';

const NavigationItems = (props) => {
  return (
    <>
      {props.isAuth ? <LogInNav open={props.open} /> : <LogOutNav />}
    </>
  );
}

export default NavigationItems;