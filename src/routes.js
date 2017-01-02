import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

export default (
	<Route path = "/" component={ App }>

		{/* Renders the blog posts only on / URL */}
		<IndexRoute component={ PostsIndex } />

		{/* Child routes remain the same */}
		<Route path="posts/new" component={PostsNew} />

	</Route>
);