import React from 'react';
import Link from '../../components/UI/Link/Link';

const Home = () => {
  return (
    <div className="home">
      <div className="home__text-box">
        <h1 className="heading-primary u-margin-bottom-big">
          <span className="heading-primary--main">Recepies</span>
          <span className="heading-primary--sub">Your own cooking book</span>
        </h1>
        <Link class="link btn__secondary" route="/auth">Sign in</Link>
      </div>
    </div>
  );
}

export default Home;