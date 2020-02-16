import React from 'react';
import Link from '../../../UI/Link/Link';

const LogInNav = (props) => {
  let navigationClass = 'navigation--login navigation--login--close';
  if (props.open) {
    navigationClass = 'navigation--login navigation--login--open'
  }

  return (
    <nav className={navigationClass}>
      <ul className="navigation--login__list">
        <li className="navigation__item"><Link class="link link--login" route="/recepies-list"><span>List of Recepies</span> <span className="navigation--login__icon fas fa-list-ul"></span></Link></li>
        <li className="navigation__item"><Link class="link link--login" route="/logout"><span>Logout</span><span className="navigation--login__icon fas fa-sign-out-alt"></span></Link></li>
      </ul>
    </nav>
  );
}

export default LogInNav;