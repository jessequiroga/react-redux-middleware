import React from 'react';
import { Route, Redirect } from 'react-router';

const DefaultRoute = ({ path, component: Component }) => (
    <Route path={path} render={() => {
        const current = window.location.pathname;
        if (current == "/") {
            return <Redirect to="/users" />
        }
    }} />
);

export default DefaultRoute;
