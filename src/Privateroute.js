import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Privateroute = ({ path, exact, component: Component }) => (
    <Route path={path} exact={exact} render={(props) => {
        const isLogin = localStorage.getItem('isLogin');
        if (isLogin === 'true')
            return <Component {...props} />
        else
            return <Redirect to="/login" />
    }} />
);

export default Privateroute;
