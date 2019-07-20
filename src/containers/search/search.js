import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from "../../components/search";
import * as actionCreator from "../../actions";

class SearchContainer extends Component {
  chartRef = React.createRef();
  componentDidMount = () => {
    // fetch planets
    this.props.fetchPlanets();
    
  };
  render() {
    return <SearchForm {...this.props} />;
  }
}

const mapStateToProps = state => ({
  planets: state.search.planets
});

const mapDispatchToProps = dispatch => {
  return {
    fetchPlanets: () => dispatch(actionCreator.fetchPlanetsAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
