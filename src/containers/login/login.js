import React, { Component } from "react";
import { connect } from "react-redux";
import { attemptLoginAction } from "../../actions";
import LoginForm from "../../components/login";

class LoginContainer extends Component {
  render() {
    return <LoginForm {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
  isLoading: state.login.isLoading
});

const mapDispatchToProps = {
  attemptLogin: attemptLoginAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
