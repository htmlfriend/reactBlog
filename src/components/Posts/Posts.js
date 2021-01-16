import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../store/actions/postActions";
import Spinner from "../Spinner/Spinner";
import Post from "../Post/Post";
import Helmet from "react-helmet";

export class Posts extends Component {
  state = {
    posts: [{ title: "helelo" }, { title: "sldjsl" }],
  };
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts } = this.props;
    if (!posts) {
      return <Spinner />;
    }
    return (
      <div>
        <Helmet>
          <title>Main page</title>
        </Helmet>

        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
});

export default connect(mapStateToProps, { getPosts })(Posts);
