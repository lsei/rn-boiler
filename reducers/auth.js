import {
  LOGIN,
  LOGIN_FAILURE,
  SET_TOKEN
} from '../actions/auth';

export default function auth(state = {
  token: '',
  loginError: '',
}, {type, payload}) {
    switch (type) {
      case SET_TOKEN: 
        return {
          ...state,
          token: payload,
        };
      
      case LOGIN_FAILURE:
        return {
          ...state,
          loginError: payload
        };

    	default: 
    		return state;
    }
}
