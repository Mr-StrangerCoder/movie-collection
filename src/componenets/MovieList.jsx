import React, { useState } from 'react'
// import data from '../data'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const MovieList = ({movies}) => {
    const navigate = useNavigate();


    return (
        <div className='text-center container'>
            <h1 className='text-danger'>Movie List</h1>
            <table class="table border table-hover">
                <thead>
                    <tr>
                        <th scope="col">Movies Name</th>
                        <th scope="col">Rating</th>
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