import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";

const MovieList = ({movies, setMovies}) => {
    const navigate = useNavigate();

    const deleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
};


    return (
        <div className='text-center container'>
            <h1 className='text-danger'>Movie List</h1>
            <table class="table border table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Movies Name</th>
                        <th scope="col">Rating</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>
                                <Link style={{textDecoration:'none'}} to={`/movie/${movie.id}`}>{movie.title}</Link>
                            </td>
                            <td>
                                {'⭐'.repeat(movie.rating)}
                                {'☆'.repeat(5 - movie.rating)}
                            </td>
                            <td><button className='btn text-danger fs-4' onClick={()=>deleteMovie(movie.id)}><RiDeleteBinLine /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={() => {
                navigate('/add');
            }}>Add New Movie</button>
        </div>
    )
}
export default MovieList