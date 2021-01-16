import React, { Component } from "react";
import { connect } from "react-redux";
import withAuth from "../../hocs/withAuth";
import Helmet from "react-helmet";

import { addPost } from "../../store/actions/postActions";

export class AddPost extends Component {
  state = {
    title: "",
    text: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addPost(this.state, this.props.history);
  };
  render() {
    const { title, text } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <Helmet>
          <title>Add the post</title>
        </Helmet>

        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            value={title}
            onChange={this.onChange}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            name='text'
            value={text}
            onChange={this.onChange}
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Publish
        </button>
      </form>
    );
  }
}

export default withAuth(connect(null, { addPost })(AddPost));
