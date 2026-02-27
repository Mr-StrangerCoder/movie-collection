import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './componenets/MovieList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieDetails from './componenets/MovieDetails'
import AddNewMovie from './componenets/AddNewMovie'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />}/>
        <Route path='/AddNewMovie' element={<AddNewMovie/>}></Route>
        <Route path='/movie/:id' element={<MovieDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
