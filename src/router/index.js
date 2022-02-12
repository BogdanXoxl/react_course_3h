import Error from '../pages/error';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';

export const PrivateRoutes = [
    {path: "/error", component: <Error/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <PostIdPage/>, exact: true},
];

export const PublicRoutes = [
    {path: "/login", component: <Login/>, exact: true},
];