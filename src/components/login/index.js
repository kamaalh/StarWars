import React, { Component } from "react";
import { Redirect } from "react-router";
import ROUTES from "../../router/routes";

class LoginForm extends Component {
  clickHandler = () => {
    this.props.attemptLogin({
      username: this.username.value,
      password: this.password.value
    });
  };

  render() {
    const { isLoggedIn, isLoading } = this.props;
    return isLoggedIn ? 
      <Redirect to={ROUTES.SEARCH} />
     : 
      <React.Fragment>
        <h2>Please login</h2>
        {isLoading && <h3>loading...</h3>}
        <input type="text" ref={usn => this.username = usn} />
        <input type="password" ref={psw => this.password = psw} />

        <button onClick={this.clickHandler}>Login</button>
      </React.Fragment>
    ;
  }
}

LoginForm.defaultProps = {
  isLoggedIn: false,
  loading: false
};

export default LoginForm;
