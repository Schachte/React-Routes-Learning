
/*
	SIDE-NOTES:
		- Important to know what your state is supposed to look like
		- Array of titles/categories
		- Active posts/details/information
*/


import { FETCH_POSTS } from '../actions/index';

//Post holds a single post
//All holds an array of all the posts
const INIT_STATE = { all: [], post: null};

export default function(state = INIT_STATE, action) {
	switch(action.type) {

		case FETCH_POSTS:

			//Return whatever current state is AND then add ALL
			return { ...state, all: action.payload.data }

		default: 
			return state;
	}
}