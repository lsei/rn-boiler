import 'regenerator-runtime/runtime';
import {call, put} from 'redux-saga/effects';
import fetchMock from 'fetch-mock';
import * as api from '../../helpers/api';
import { navigate } from '../../helpers/Navigation';
import {handleLogin, navigateToLoggedInRoute} from './login';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SET_TOKEN,
} from '../../actions/auth';

const loginResponse = {token: {encrypted_token: 'very safe token'}};

fetchMock.mock('*', loginResponse, {overwriteRoutes: true});

describe('Login saga success', () => {
  const action = {type: 'LOGIN', payload: {user_name: 'abcd', password: 'mypass'}}
  const gen = handleLogin(action);
  
  it('sends login request', () => {
    expect(gen.next().value).to.eql(call([api, api.login], action.payload));   
  });
  
  it('sets token', () => {
    expect(gen.next(loginResponse).value).to.eql(put({type: SET_TOKEN, payload: loginResponse.token.encrypted_token}));
  });
  
  it('send success action', () => {
    expect(gen.next().value).to.eql(put({type: LOGIN_SUCCESS}));
  });
  
  it('navigate to logged in route', () => {
    expect(gen.next().value).to.eql(call(navigate, 'LoggedIn'));
  });

  it('saga completed', () => {
    expect(gen.next().done).to.eql(true);
  });
});

describe('Login saga network failure', () => {
  const action = {type: 'LOGIN', payload: {user_name: 'abcd', password: 'mypass'}}
  const gen = handleLogin(action);
  gen.next();
  
  it('sends network failure message', () => {
    expect(gen.throw('Network Error').value).to.eql(put({type: LOGIN_FAILURE, payload: 'Network Error'}));
  });

  it('saga completed', () => {
    expect(gen.next().done).to.eql(true);
  });
});

describe('Login saga failure', () => {
  const action = {type: 'LOGIN', payload: {user_name: 'abcd', password: 'mypass'}}
  const gen = handleLogin(action);
  gen.next();
  
  it('sends bad credentials message', () => {
    expect(gen.throw({error: 'Bad Credentials'}).value).to.eql(put({type: LOGIN_FAILURE, payload: 'Bad Credentials'}));
  });

  it('saga completed', () => {
    expect(gen.next().done).to.eql(true);
  });
});
