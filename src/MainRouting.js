import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import UserPage from './pages/Users/UsersPage';
import TodoPage from './pages/Todo/TodoPage';
import DefaultRoute from './DefaultRoute';
import LoginPage from './pages/Login/LoginPage';
import Privateroute from './Privateroute';

const MainRouting = () => {
    return (
        <BrowserRouter>
            <Route path="/processLogin" render={() => {
                localStorage.setItem('isLogin', true);
                return <Redirect to="/users" />
            }} />
            <Route path="/processLogout" render={() => {
                localStorage.setItem('isLogin', false);
                return <Redirect to="/login" />
            }} />
            <Route path="/login" exact={true} component={LoginPage} />
            <Privateroute path="/users" exact={true} component={UserPage}></Privateroute>
            <Privateroute path="/users/:user_id/todo" component={TodoPage}></Privateroute>
            <DefaultRoute path="/" component={UserPage} />
        </BrowserRouter>
    );
};

export default MainRouting;
