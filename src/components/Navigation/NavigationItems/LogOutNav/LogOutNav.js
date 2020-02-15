import React from 'react';
import Link from '../../../UI/Link/Link';

const LogOutNav = () => {
  return (
    <nav className="navigation--logout">
      <ul className="navigation--logout__list">
        <li className="navigation__item"><Link class="link link--logout" route="/" exact>Home</Link></li>
        <li className="navigation__item"><Link class="link link--logout" route="/auth">Sign In</Link></li>
      </ul>
    </nav>
  );
}

export default LogOutNav;