import React, { Component } from "react";
import { fetchDogByBreed } from "./api";
import { BreedSelect } from "./components/BreedSelect";
import { Dog } from "./components/Dog";

export class App extends Component {
  state = {
    dog: null,
    isLoading: false,
    error: null,
  };

  selectBreed = async breedId => {
    try {
      this.setState({isLoading: true})
      const dog = await fetchDogByBreed(breedId);
      this.setState({ dog });
    } catch {
      this.setState({
        error: "Помилка, попробуйте ще раз!"
      })
    } finally {
      this.setState({ isLoading: false});
    }
  };
  render() {
    const { error, dog, isLoading } = this.state;
  return (
    <div className="App">
      <BreedSelect onSelect={this.selectBreed} />
      {dog && !isLoading && <Dog dog={dog} />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isLoading && <div>LOADING...</div>}
    </div>
  )}
}

export default App;
