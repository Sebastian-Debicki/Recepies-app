import React from 'react';
import { connect } from 'react-redux';

const RecepiesList = (props) => {
  return (
    <div className="recepies-list">
      <div className={props.open ? "recepies-list__box open" : "recepies-list__box"}>
        Recepies list!!!!
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    open: state.open.open
  }
}

export default connect(mapStateToProps)(RecepiesList);