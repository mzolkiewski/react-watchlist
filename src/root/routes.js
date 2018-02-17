/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */

import React from 'react';
import { NOT_FOUND } from 'redux-first-router';

import { routes as dashboardRoutes } from '../modules/dashboard';
import { routes as showsRoutes } from '../modules/shows';
import { routes as usersRoutes } from '../modules/users';
import { routes as userRoutes } from '../modules/user';
import { NotFound } from '../modules/shared';

export default {
  ...dashboardRoutes,
  ...showsRoutes,
  ...usersRoutes,
  ...userRoutes,
  [NOT_FOUND]: {
    component: () => <NotFound />
  },
};