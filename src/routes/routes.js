import Posts from '../views/Posts/';
import PostsEdit from '../views/Posts/PostsEdit';

export const routes = [
    { path: '/posts', name: 'posts', component: Posts, meta: { title: 'Lista de Posts' } },
    { path: '/postsEdit/:id', name: 'edit', component: PostsEdit, meta: { title: 'Edição de Post' } },
    { path: '*', component: Posts, meta: { title: 'Lista de Posts' } },
];