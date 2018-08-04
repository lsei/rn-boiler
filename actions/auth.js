export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SET_TOKEN = 'SET_TOKEN';

export function login(user_name, password) {
	return { 
    type: LOGIN,
    payload: {
      user_name,
      password,
    }
  }
}
