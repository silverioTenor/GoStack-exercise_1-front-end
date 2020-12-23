import React, { useState } from 'react';

import './App.css';
import winterBackground from './assets/winter.png';

import Header from './components/Header';

export default function App() {
  const [movies, setMovies] = useState(['The Lord of the Rings', 'Harry Potter', 'Titanic']);

  function handleAddMovie() {
    setMovies([...movies, `New movie ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Filmes" />

      <ul>
        {movies.map(movie => (
          <li key={movie}>
            <img width="50" height="50" src={winterBackground} alt={movie} />
            <span>{movie}</span>
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleAddMovie}>Adicionar filme</button>
    </>
  );
}