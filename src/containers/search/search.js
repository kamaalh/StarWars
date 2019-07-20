import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from "../../components/search";
import * as actionCreator from "../../actions";
import chart from "chart.js";

class SearchContainer extends Component {
  chartRef = React.createRef();
  componentDidMount = () => {
    // fetch planets
    this.props.fetchPlanets();
    const mychartRef = this.chartRef.current.getContext("2d");

    new chart(mychartRef, {
      type: "pie",
      data: {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
          {
            label: "Sales",
            data: [4, 7, 11]
          }
        ]
      }
    });
  };
  render() {
    return (
      <>
        <SearchForm {...this.props} />
        <div className="">
          <canvas id="myChart" ref={this.chartRef} />
        </div>
      </>
    );
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
