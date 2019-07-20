import React,  {Component} from "react";

class PlanetInfo extends Component {    
    render(){
      if(!this.props.info){
        return <div>Select a Planet to know more about it.</div>
      }
      const {name} = this.props.info;      
      return <div>Name: {name}</div>
    }
};

export default PlanetInfo;

