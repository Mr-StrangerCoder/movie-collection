import { useState, useEffect } from 'react'
import './App.css'
import moviesData from "./data";
import MovieList from './componenets/MovieList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieDetails from './componenets/MovieDetails'
import AddNewMovie from './componenets/AddNewMovie'
import EditMovie from './componenets/editMovie';

function App() {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    return saved ? JSON.parse(saved) : moviesData;
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} setMovies={setMovies} />} />
        <Route path="/add" element={<AddNewMovie movies={movies} setMovies={setMovies} />} />
        <Route path='/movie/:id' element={<MovieDetails data={movies} />}></Route>
        <Route
          path="/edit/:id"
          element={<EditMovie movies={movies} setMovies={setMovies} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
