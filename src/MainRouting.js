import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import UserPage from './pages/Users/UsersPage';
import TodoPage from './pages/Todo/TodoPage';
import DefaultRoute from './DefaultRoute';
import AlbumsPage from './pages/Albums/AlbumsPage';
import PhotosPage from './pages/Photos/PhotosPage';

const MainRouting = () => {
    return (
        <BrowserRouter>
            <Route path="/users" exact={true} component={UserPage} />
            <Route path="/users/:user_id/todo" component={TodoPage} />
            <Route path="/users/:user_id/albums" exact={true} component={AlbumsPage} />
            <Route path="/users/:user_id/albums/:album_id/photos" component={PhotosPage} />
            <DefaultRoute path="/" component={UserPage} />
        </BrowserRouter>
    );
}

export default MainRouting;