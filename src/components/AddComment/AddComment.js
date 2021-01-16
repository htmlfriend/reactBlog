import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { addComment } from "../../store/actions/postActions";

export class AddComment extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.addComment(id, this.state);
    this.setState({
      text: "",
    });
  };
  render() {
    const { user } = this.props;
    const { text } = this.state;
    if (!user) {
      return (
        <div>
          <p>
            To comment can only register users
            <br />
            <Link to='/login'>Enter </Link> and
            <Link to='/register'>register</Link>
          </p>
        </div>
      );
    }
    return (
      <form className='mb-3' onSubmit={this.onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Comment</label>
          <textarea
            className='form-control'
            type='text'
            name='text'
            value={text}
            onChange={this.onChange}
          />
        </div>

        <button className='btn btn-primary' type='submit'>
          Send
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
});

export default withRouter(connect(mapStateToProps, { addComment })(AddComment));
