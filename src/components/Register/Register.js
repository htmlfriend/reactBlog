import React, { Component } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet";

import { registerUser } from "../../store/actions/authActions";
import { clearErrors } from "../../store/actions/errorActions";
export class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
  };

  componentDidUpdate() {
    if (this.props.user) {
      this.props.history.push("/");
    }
  }

  componentDidMount() {
    this.props.clearErrors();
    if (this.props.user) {
      this.props.history.push("/");
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.registerUser(this.state);
  };
  render() {
    const { errors } = this.props;
    const { email, password, name, password2 } = this.state;
    return (
      <div className='row'>
        <Helmet>
          <title>Register page</title>
        </Helmet>
        <form className='cart p-3 mx-auto col-md-6' onSubmit={this.onSubmit}>
          <h2>Registration</h2>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              className='form-control'
              value={name}
              onChange={this.onChange}
            />
            {errors.name && <div className='text-danger'>{errors.name}</div>}
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              className='form-control'
              value={email}
              onChange={this.onChange}
            />
            {errors.email && <div className='text-danger'>{errors.email}</div>}
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              className='form-control'
              value={password}
              onChange={this.onChange}
            />

            {errors.password && (
              <div className='text-danger'>{errors.password}</div>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='password2'>Repeat password</label>
            <input
              type='password'
              name='password2'
              className='form-control'
              value={password2}
              onChange={this.onChange}
            />

            {errors.password2 && (
              <div className='text-danger'>{errors.password2}</div>
            )}
          </div>
          <button type='submit' className='btn btn-primary btn-lg'>
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  errors: state.errorReducer,
});

export default connect(mapStateToProps, { registerUser, clearErrors })(
  Register
);
