import Posts from '../views/Posts/';
import PostsEdit from '../views/Posts/PostsEdit';

export const routes = [
    { path: '/posts', name: 'posts', component: Posts },
    { path: '/postsEdit/:id', name: 'edit', component: PostsEdit },
    { path: '*', component: Posts },
];