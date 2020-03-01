import React from 'react';
import LogOutNav from './LogOutNav/LogOutNav';
import LogInNav from './LogInNav/LogInNav';

const NavigationItems = ({ isAuth, open }) => {
  return (
    <>
      {isAuth ? <LogInNav open={open} /> : <LogOutNav />}
    </>
  );
}

export default NavigationItems;