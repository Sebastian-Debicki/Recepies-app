import React from 'react';
import Link from '../../../UI/Link/Link';

const LogInNav = () => {
  return (
    <nav className="navigation--login">
      <ul className="navigation--login__list">
        <li className="navigation__item"><Link class="link" route="/logout">Logout</Link></li>
        <li className="navigation__item"><Link class="link" route="/recepies-list">List of Recepies</Link></li>
      </ul>
    </nav>
  );
}

export default LogInNav;