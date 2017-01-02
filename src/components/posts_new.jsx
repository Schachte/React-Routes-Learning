import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
	render() {

		const { fields: { title, categories, content }, handleSubmit } = this.props;
		//Equivalent to: const title = this.props.fields.title

		return (

			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h3>Create New Post</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" { ...title } />
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>					
				</div>

				<div className="form-group">
					<label>Categories</label>
					<input type="text" className="form-control" { ...categories } />
				</div>

				<div className="form-group">
					<label>Content</label>
					<textarea type="text" className="form-control" { ...content } />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Enter blog title'
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