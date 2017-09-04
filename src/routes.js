import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
// import PostsIndex from './components/posts_index';
import ListPosts from './components/list_posts';
// import PostsShow from './components/posts_show';
import DisplayPage from './components/display_page';

export default (

    <Route path="/" component={ App }>

        {/*<IndexRoute component={PostsIndex} />*/}
        <Route path="posts" component={ListPosts} />
        {/*<Route path="posts/:id" component={PostsShow} />*/}
        <Route path="page/:id" component={DisplayPage}></Route>

    </Route>

);