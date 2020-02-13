import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import UserPage from './pages/Users/UsersPage';
import TodoPage from './pages/Todo/TodoPage';
import DefaultRoute from './DefaultRoute';
import LoginPage from './pages/Login/LoginPage';
import Privateroute from './Privateroute';
import { bindActionCreators } from 'redux';
import { login, logout } from './actions/LoginPageAction';
import { connect } from 'react-redux';

const MainRouting = (props) => {
    const { isLogin, login } = props;

    return (
        //* Use localstorage
        // <BrowserRouter>
        //     <Route path="/processLogin" render={() => {
        //         localStorage.setItem('isLogin', true);
        //         return <Redirect to="/users" />
        //     }} />
        //     <Route path="/processLogout" render={() => {
        //         localStorage.setItem('isLogin', false);
        //         return <Redirect to="/login" />
        //     }} />
        //     <Route path="/login" exact={true} component={LoginPage} />
        //     <Privateroute path="/users" exact={true} component={UserPage}></Privateroute>
        //     <Privateroute path="/users/:user_id/todo" component={TodoPage}></Privateroute>
        //     <DefaultRoute path="/" component={UserPage} />
        // </BrowserRouter>

        //* Use Redux
        <BrowserRouter>
            <Route path="/processLogin" render={() => {
                login();
                return <Redirect to="/users" />
            }} />
            <Route path="/processLogout" render={() => {
                logout();
                return <Redirect to="/login" />
            }} />
            <Route path="/login" exact={true} component={LoginPage} />
            <Privateroute path="/users" exact={true} component={UserPage} isLogin={isLogin}></Privateroute>
            <Privateroute path="/users/:user_id/todo" component={TodoPage} isLogin={isLogin}></Privateroute>
            <DefaultRoute path="/" component={UserPage} />
        </BrowserRouter>
    );
};

const mapStateToProps = (state) => {
    return {
        isLogin: state.loginPage.isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ login, logout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MainRouting);
