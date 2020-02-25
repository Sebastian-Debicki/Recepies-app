import React from 'react';

export const useAddRecepieState = () => {
  const [nameRecepieState, setNameRecepieState] = React.useState('');
  const [descriptionRecepieState, setDescriptionRecepieState] = React.useState('');

  const changeRecepieNameHandler = (e) => setNameRecepieState(e.target.value)
  const changeRecepieDescriptionHandler = (e) => setDescriptionRecepieState(e.target.value);


  return { nameRecepieState, descriptionRecepieState, changeRecepieNameHandler, changeRecepieDescriptionHandler, setNameRecepieState, setDescriptionRecepieState }
}