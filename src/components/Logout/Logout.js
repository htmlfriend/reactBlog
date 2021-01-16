import React, { Component } from "react";
import { connect } from "react-redux";

import { logoutUser } from "../../store/actions/authActions";

export class Logout extends Component {
  componentDidCatch() {
    this.props.logoutUser();
    this.props.history.replace("/login");
  }
  render() {
    return <div>Logout</div>;
  }
}

export default connect(null, { logoutUser })(Logout);
