import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import jwt from 'jwt-simple';

import '../utils/rxjs.add.operator.apiCatch';
import { apiService, resetOnLogoutReducer } from '../utils';
import { moduleName, userStorageKey } from './constants';

//
// actions
//
export const ROUTE_LOGIN = `${moduleName}/ROUTE_LOGIN`;

export const LOGIN_REQUEST = `${moduleName}/LOGIN_REQUEST`;
export const LOGIN_RESPONSE = `${moduleName}/LOGIN_RESPONSE`;
export const LOGIN_ERROR = `${moduleName}/LOGIN_ERROR`;
export const loginRequest = googleAccessToken => ({ type: LOGIN_REQUEST, payload: googleAccessToken });
export const loginResponse = userToken => ({ type: LOGIN_RESPONSE, payload: userToken });
export const loginError = err => ({ type: LOGIN_ERROR, payload: err });

export const LOGOUT = `${moduleName}/LOGOUT`;
export const logout = () => ({ type: LOGOUT });

//
// reducers
//
const user = (state = null, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
    case LOGOUT: {
      return null;
    }
    case LOGIN_RESPONSE: {
      return payload.user;
    }
    default: {
      return state;
    }
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
    case LOGOUT: {
      return null;
    }
    case LOGIN_RESPONSE: {
      return payload.token;
    }
    default: {
      return state;
    }
  }
};

const loginLoading = (state = false, { type }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return true;
    }
    case LOGIN_RESPONSE:
    case LOGIN_ERROR: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const reducers = combineReducers({
  user,
  token,
  loginLoading,
});

export default resetOnLogoutReducer(reducers);

//
// selectors
//
const moduleSel = state => state[moduleName];

export const userSel = state => moduleSel(state).user || {};
export const isLoggedInSel = state => Boolean(moduleSel(state).user);
export const isRootSel = state => userSel(state).role === 'root';
export const isAtLeastAdminSel = state => ['root', 'admin'].includes(userSel(state).role);

export const loginLoadingSel = state => moduleSel(state).loginLoading;

//
// epics
//
const loginEpic$ = action$ => action$
  .ofType(LOGIN_REQUEST)
  .switchMap(({ payload }) => login$(payload)
    .do(storeUserToken)
    .map(token => {
      const user = decodeToken(token);
      return { user, token };
    })
    .mergeMap(res => Observable.concat(
      Observable.of(loginResponse(res)),
      Observable.of({ type: 'dashboard/ROUTE_DASHBOARD' }),
    ))
    .apiCatch(err => Observable.of(loginError(err))));

const logoutEpic$ = action$ =>
  action$.ofType(LOGOUT)
    .do(removeUserToken)
    .mapTo(({ type: ROUTE_LOGIN }));

export const epics = combineEpics(
  loginEpic$,
  logoutEpic$,
);

//
// services
//
const login$ = googleAccessToken => apiService
  .post$('/users/login', { googleAccessToken })
  .map(({ token }) => token);

export const storeUserToken = token => localStorage.setItem(userStorageKey, token);
export const retrieveUser = () => {
  const token = retrieveUserToken();
  if (token) {
    return decodeToken(token);
  }
  return null;
};
export const decodeToken = token => jwt.decode(token, null, true);
export const retrieveUserToken = () => localStorage.getItem(userStorageKey);
export const removeUserToken = () => localStorage.removeItem(userStorageKey);

//
// initial state
//
export const initialState = {
  [moduleName]: {
    user: retrieveUser(),
  }
};
