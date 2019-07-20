import React, { Component } from "react";
import {SearchContainer, SearchInput, List, ListItem, PlanetInfoContainer } from "./search.style";
import PlanetInfo from "./planet.info.js";

class SearchForm extends Component {
  state = {
    searchedPlanets: [],
    selectedPlanet : null
  };  

  changeHandler = (e) => {
    let searchString = e.target.value;
    let searchedPlanets = [];
    if(searchString){
      searchedPlanets = this.props.planets.filter(function(planet) {
        return planet.name.toLowerCase().includes(searchString);
      });
    }    
    this.setState({searchedPlanets});
    
  };
  
  selectPlanet = (e) => {
    console.log(e.target.innerHTML);
    const selectedPlanets = this.props.planets.filter(function(planet) {
      return planet.name.toLowerCase() === e.target.innerHTML.toLowerCase();
    });
    this.setState({selectedPlanet:selectedPlanets[0]});
  }  

  render() {
    const {searchedPlanets, selectedPlanet} = this.state; 
    return (
      <React.Fragment>
        <h1>Please type in planet name</h1>
        <SearchContainer>
          <SearchInput type="text" onChange={this.changeHandler} />
          <List>
            {searchedPlanets.map( (planet) => <ListItem key={planet.name} onClick={this.selectPlanet}>{planet.name}</ListItem>)}
          </List>
        </SearchContainer>
        <PlanetInfoContainer>
          <PlanetInfo info={selectedPlanet}></PlanetInfo>
        </PlanetInfoContainer>
      </React.Fragment>
    );
  }
}

SearchForm.defaultProps = {
  planets: []
};

export default SearchForm;
