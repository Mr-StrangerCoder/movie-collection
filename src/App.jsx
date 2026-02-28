import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import moviesData from "./data";
import MovieList from './componenets/MovieList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieDetails from './componenets/MovieDetails'
import AddNewMovie from './componenets/AddNewMovie'

function App() {
  const [movies, setMovies] = useState(moviesData);
  console.log(movies)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route
          path="/add"
          element={<AddNewMovie movies={movies} setMovies={setMovies} />}
        />
        <Route path='/movie/:id' element={<MovieDetails />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
