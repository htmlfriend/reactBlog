import React, { Component } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";
import Spinner from "../Spinner/Spinner";

import withAuth from "../../hocs/withAuth";

import { editPost, getPost } from "../../store/actions/postActions";

export class EditPost extends Component {
  constructor(props) {
    super(props);

    this.titleInput = React.createRef();
    this.textInput = React.createRef();
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getPost(id);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.editPost(
      id,
      {
        title: this.titleInput.current.value,
        text: this.textInput.current.value,
      },
      this.props.history
    );
  };
  render() {
    const { post } = this.props.post;
    if (!post) {
      return <Spinner />;
    }
    return (
      <form onSubmit={this.onSubmit}>
        <Helmet>
          <title>Edit the post</title>
        </Helmet>

        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            ref={this.titleInput}
            type='text'
            defaultValue={post.title}
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='text'>Text</label>
          <input
            ref={this.textInput}
            type='text'
            defaultValue={post.text}
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Edit the article
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.postReducer.post,
});

export default withAuth(
  connect(mapStateToProps, { editPost, getPost })(EditPost)
);
