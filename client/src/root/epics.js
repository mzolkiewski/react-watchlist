import { combineEpics } from 'redux-observable';

import { epics as dashboardEpics } from '../modules/dashboard';
import { epics as showOperationsEpics } from '../modules/showOperations';
import { epics as showsEpics } from '../modules/shows';
import { epics as usersEpics } from '../modules/users';

export default combineEpics(
  dashboardEpics,
  showOperationsEpics,
  showsEpics,
  usersEpics,
);
