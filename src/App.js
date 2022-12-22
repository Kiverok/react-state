import { fetchDogByBreed } from "./api";
import React, { Component } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { BreedSelect } from "./components/BreedSelect";
import { Dog } from "./components/Dog";
import { DogSkeleton } from "./components/DogSkeleton";

export class App extends Component {
  state = {
    dog: null,
    isLoading: false,
    error: null,
  };

  selectBreed = async breedId => {
    try {
      this.setState({isLoading: true, error: null})
      const dog = await fetchDogByBreed(breedId);
      this.setState({ dog });
    } catch {
      this.setState({
        error: "Помилка, попробуйте ще раз!"
      });
      toast.error(
        'Помилка, попробуйте ще раз!'
      );
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
      {isLoading && <DogSkeleton />}    
      <Toaster position="bottom-right"/>
    </div>
  );
}
}

export default App;
