import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 40%;
  float: left;
  padding: 0 50px;
`;

export const PlanetInfoContainer = styled.div`
  width: 40%;
  float: right;
  text-align: left;
  padding: 0 50px;
`;

export const SearchInput = styled.input`
  width:100%;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid gray;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-top: 1px solid gray;
  :first-child {
    border-top: none;
  }
`;

export const FeatureName = styled.span`
  font-weight: bold
`;

export const PlanetList = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid gray;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

export const PlanetLI = styled.li`  
  padding: 10px 0px;  
`;

