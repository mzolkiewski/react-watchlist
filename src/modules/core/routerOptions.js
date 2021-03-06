import { redirect } from 'redux-first-router';
import restoreScroll from 'redux-first-router-restore-scroll';
import qs from 'qs';

import { BASE_URL } from '../config';
import { userSel, ROUTE_LOGIN } from '../user';
import { routesMapSel } from '../location';

const options = {
  basename: BASE_URL,
  onBeforeChange: (dispatch, getState, { action /*, extra*/ }) => {
    const state = getState();
    checkAccess(dispatch, state, action);
  },
  querySerializer: qs,
  restoreScroll: restoreScroll()
};

const checkAccess = (dispatch, state, action) => {
  const user = userSel(state);
  const routesMap = routesMapSel(state);
  const allowed = isAllowed(routesMap, action.type, user.role);

  if (!allowed) {
    dispatch(redirect({ type: ROUTE_LOGIN }));
  }
};

const isAllowed = (routesMap, actionType, userRole) => {
  const { freeAccess, roles = [] } = routesMap[actionType];

  return freeAccess || roles.length === 0 || roles.includes(userRole);
};

export default options;
