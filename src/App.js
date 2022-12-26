import { useState } from "react";
import { fetchDogByBreed } from "./api";
// import React, { Component } from "react";
// import toast, { Toaster } from 'react-hot-toast';
import { BreedSelect } from "./components/BreedSelect";
import { Dog } from "./components/Dog";
import { DogSkeleton } from "./components/DogSkeleton";

const ERROR_MESSAGE = 'Помилка!, спробуйте перезавантажити!'

export const App = () => {
  const  [dog, setDog] = useState(null)
  const  [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)


  const selectBreed = async breedId => {
    try {
      setIsLoading(true)
      setError(null)
      const dog = await fetchDogByBreed(breedId);
      setDog(dog)
    } catch {
    setError(ERROR_MESSAGE);
    } finally {
      setIsLoading(false);
    }
  };
 
  return (
    <div className="App">
      <BreedSelect onSelect={selectBreed} />
      {dog && !isLoading && <Dog dog={dog} />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isLoading && <DogSkeleton />}    
    </div>
  );

}

export default App;
