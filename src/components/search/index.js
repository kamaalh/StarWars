import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    //const { isLoggedIn, isLoading } = this.props;
    return (
      <React.Fragment>
        <h2>Please type in planet name</h2>
        <input type="text" />
      </React.Fragment>
    );
  }
}

SearchForm.defaultProps = {};

export default SearchForm;
