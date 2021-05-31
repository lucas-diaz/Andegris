export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const CHECK_AUTH = 'CHECK_AUTH';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload
});

export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
})

export const checkAuth = () =>({
  type: CHECK_AUTH,
})

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

