import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { getPost, deletePost } from "../../store/actions/postActions";
import { Spinner } from "../Spinner/Spinner";

import { AddComment } from "../AddComment/AddComment";
import { Comments } from "../Comments/Comments";

export class PostPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getPost(id);
  }

  deletePost = () => {
    const id = this.props.match.params.id;
    this.props.deletePost(id, this.props.history);
  };
  render() {
    const { post, user } = this.props;

    if (!post) {
      return <Spinner />;
    }
    return (
      <div>
        <Helmet>
          <title>{post.title}</title>
        </Helmet>

        <h1>{post.title}</h1>
        <p className='text-muted'>{post.author.name}</p>
        <p>{post.text}</p>
        {user && user.id === post.author._id ? (
          <div className='mb-3'>
            <button onClick={this.deletePost} className='btn btn-danger mr-2'>
              Delete post
            </button>
            <Link to={`/edit/${post._id}`} className='btn btn-light mr-2'>
              Edit post
            </Link>
          </div>
        ) : null}
        <AddComment />
        <Comments comments={post.comments} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  post: state.postReducer.post,
});

export default connect(mapStateToProps, { getPost, deletePost })(PostPage);
