import React from 'react';
import Link from '../../../components/UI/Link/Link';

const Recepie = (props) => {
  return (
    <li className="recepie">
      <select className="recepie__select" onChange={(e) => props.changeSingleRecepieOptionHandler(e, props.recepie)} >
        <option style={{ display: 'none' }} value=""></option>
        <option value="delete">Delete</option>
        {!props.recepie.favorite && <option value="favoriteAdd">Add to favorite</option>}
        {props.recepie.favorite && <option value="favoriteRemove">Remove from favorite</option>}
      </select>
      <span className="recepie__icon--settings fas fa-ellipsis-v"></span>
      <Link class="recepie__link" route={`/recepies-list/${props.recepie.id}`}>
        <h3 className="heading-tertiary">{props.recepie.name ? props.recepie.name : <span style={{ fontStyle: "italic" }}>No name</span>}</h3>
        {props.recepie.calories !== 0 && props.recepie.calories && <span className="recepie__calories">{props.recepie.calories} kcal</span>}
        <p>{props.recepie.description ? props.recepie.description : <span style={{ fontStyle: "italic" }}>No description</span>}</p>
      </Link>
      <span className="recepie__icon--arrow">&rarr;</span>
    </li>
  );
}

export default Recepie;