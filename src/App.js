import React, { Component } from "react";
import { BreedSelect } from "./components/BreedSelect";

export class App extends Component {
  state = {
    selectedBreed: null,
  };

  selectBreed = breedId => {
    console.log(breedId)
  }
  render() {
  return (
    <div className="App">
      <BreedSelect onSelect={this.selectBreed} />
    </div>
  )}
}

export default App;
