import React from 'react';
import { Redirect } from 'react-router-dom';
import homeRoute from './app/components/modules/home/homeRoute';
import loansRoutes from './app/components/modules/loans/loansRoutes';
import securityRoutes from './app/components/modules/security/securityRoutes';
//import history from './app/services/History';

const redirectRoute = [{path: '/',exact: true, component: () => <Redirect to="/" />}];
const errorRoute = [{component: () => <Redirect to="/404" />}];
const routes = [
    ...homeRoute,
    ...loansRoutes,
    ...securityRoutes,
    ...redirectRoute,
    ...errorRoute,
];
export default routes;
