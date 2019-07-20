import React, { Component } from "react";
import { FeatureName, PlanetList, PlanetLI } from "./search.style";

class PlanetInfo extends Component {
  render() {
    if (!this.props.info) {
      return <PlanetList><PlanetLI>Select a Planet to know more about it.</PlanetLI></PlanetList>
    }
    const { name, climate, diameter, gravity,
       population, terrain, surface_water, rotation_period, orbital_period, created } = this.props.info;
    return (<PlanetList>
      <PlanetLI><FeatureName>Name:    </FeatureName>{name}</PlanetLI>
      <PlanetLI><FeatureName>Climate:    </FeatureName>{climate}</PlanetLI>
      <PlanetLI><FeatureName>Diameter:    </FeatureName>{diameter}</PlanetLI>
      <PlanetLI><FeatureName>Gravity:    </FeatureName>{gravity}</PlanetLI>
      <PlanetLI><FeatureName>Population:    </FeatureName>{population}</PlanetLI>
      <PlanetLI><FeatureName>Terrain:    </FeatureName>{terrain}</PlanetLI>
      <PlanetLI><FeatureName>Created:    </FeatureName>{created}</PlanetLI>
      <PlanetLI><FeatureName>Orbital Period:    </FeatureName>{orbital_period}</PlanetLI>
      <PlanetLI><FeatureName>Orbital Period:    </FeatureName>{rotation_period}</PlanetLI>
      <PlanetLI><FeatureName>Surface Water:    </FeatureName>{surface_water}</PlanetLI>     
    </PlanetList>)
  }
};

export default PlanetInfo;

