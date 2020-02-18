import React from 'react';

export const useAuthState = () => {
  const [controlsState, setControlsState] = React.useState({
    controls: {
      email: {
        name: "Email",
        value: '',
        required: true
      },
      password: {
        name: 'Password',
        value: '',
        required: true,
        validation: {
          minLength: 6,
          maxLength: 12
        }
      }
    }
  })

  const [switchAuthTypeState, setSwitchAuthTypeState] = React.useState(false)

  const changeInputValuesHandler = (e, inputType) => {
    const controlsStateUpdated = { ...controlsState.controls };
    controlsStateUpdated[inputType].value = e.target.value;
    setControlsState({ controls: controlsStateUpdated })
  }

  const switchAuthTypeHandler = () => {
    setSwitchAuthTypeState(!switchAuthTypeState)
  }

  return { controlsState, switchAuthTypeState, changeInputValuesHandler, switchAuthTypeHandler }
}