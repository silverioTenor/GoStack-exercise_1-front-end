import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';
import winterBackground from './assets/winter.png';

import Header from './components/Header';

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get('/movies').then(response => {
      setMovies(response.data);
    });
  }, []);

  async function handleAddMovie() {
    const response = await api.post('/movies', {
      title: `Novo filme - ${Date.now()}`,
      year: Math.round(Math.ceil)
    });

    const movie = response.data;

    setMovies([...movies, movie]);
  }

  return (
    <>
      <Header title="Filmes" />

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <img width="50" height="50" src={winterBackground} alt={movie.title} />

            <div className="content">
              <span>{movie.title}</span> -
              <span>{movie.year}</span>
            </div>
          </li>
        ))}
      </ul>

      <button type="button" onClick={handleAddMovie}>Adicionar filme</button>
    </>
  );
}