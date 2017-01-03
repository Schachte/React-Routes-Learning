import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';


class PostsNew extends Component {

	static contextTypes = {
		router: PropTypes.object
	}

	onSubmit(props) {
		this.props.createPost(props);
	}

	render() {

		const { fields: { title, categories, content }, handleSubmit } = this.props;
		//Equivalent to: const title = this.props.fields.title

		return (

			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create New Post</h3>
				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : '' || title.touched && !title.invalid ? 'has-success' : ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" { ...title } />
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>					
				</div>

				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" { ...categories } />
					<div className="text-help">
						{categories.touched ? categories.error : ''}
					</div>					
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea type="text" className="form-control" { ...content } />
					<div className="text-help">
						{content.touched ? content.error : ''}
					</div>	
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to='/' className='btn btn-danger'>Cancel</Link>

			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Enter blog title';
	}

	if (!values.categories) {
		errors.categories = 'Enter set(s) of categories';
	}

	if (!values.content) {
		errors.content = 'Enter content';
	}


	return errors;
}


//connect: first arg is mapStateToProps, second arg is mapDispatchToProps
//redux-form: first arg is form config, second is mapState, 3rd is mapDispatch

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostsNew);