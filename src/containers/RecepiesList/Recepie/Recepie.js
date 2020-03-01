import React from 'react';
import Link from '../../../components/UI/Link/Link';

const Recepie = ({ recepie, changeSingleRecepieOptionHandler }) => {
  return (
    <li className="recepie">
      <select className="recepie__select" onChange={(e) => changeSingleRecepieOptionHandler(e, recepie)} >
        <option style={{ display: 'none' }} value=""></option>
        <option value="delete">Delete</option>
        {!recepie.favorite && <option value="favoriteAdd">Add to favorite</option>}
        {recepie.favorite && <option value="favoriteRemove">Remove from favorite</option>}
      </select>
      <span className="recepie__icon--settings fas fa-ellipsis-v"></span>
      <Link class="recepie__link" route={`/recepies-list/${recepie.id}`}>
        <h3 className="heading-tertiary">{recepie.name ? recepie.name : <span style={{ fontStyle: "italic" }}>No name</span>}</h3>
        {recepie.calories !== 0 && recepie.calories && <span className="recepie__calories">{recepie.calories} kcal</span>}
        <p>{recepie.description ? recepie.description : <span style={{ fontStyle: "italic" }}>No description</span>}</p>
      </Link>
      <span className="recepie__icon--arrow">&rarr;</span>
    </li>
  );
}

export default Recepie;