import Posts from '../views/Posts/';
import PostsEdit from '../views/Posts/PostsEdit';

export const routes = [
    { path: '/posts', component: Posts },
    { path: '/postsEdit', component: PostsEdit },
    { path: '*', component: Posts },
];