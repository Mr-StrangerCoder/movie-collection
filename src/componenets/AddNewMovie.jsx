import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const AddNewMovie = ({ movies, setMovies }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState()
    const [rating, setRating] = useState()
    const [disc, setDisc] = useState('')

    const AddMovie = () => {

        const newMovie = {
            id: movies.length + 1,
            title: title,
            rating: rating,
            description: disc
        };

        setMovies([...movies, newMovie]);

        navigate('/');
    };

return (
    <div className='container-fluid  bg-light px-5'>
        <h1 className='text-center mb-4'>Add New Movie</h1>
        <div className='border p-5 w-75 mx-auto bg-success'>
            <div class="mb-3">
                <label htmlFor="exampleFormControlTitle" class="form-label">Title</label>
                <input type="text" class="form-control mb-3" id="exampleFormControlTitle" onChange={(e) => setTitle(e.target.value)} />

                <label htmlFor="exampleFormControlRating" class="form-label">Rating</label>
                <input type="number" class="form-control mb-4" id="exampleFormControlRating" onChange={(e) => setRating(Number(e.target.value))} />
            </div>
            <div class="mb-3">
                <label htmlFor="exampleFormControlText" class="form-label">Description</label>
                <textarea class="form-control" onChange={(e) => setDisc(e.target.value)} id="exampleFormControlText" rows="3"></textarea>
            </div>
            <div className='text-center'>
                <button type="button" class="btn btn-warning me-4" onClick={AddMovie}>Add Movie</button>
                <button type="button" onClick={() => { navigate('/') }} class="btn btn-dark">Back</button>
            </div>

        </div>

    </div>
)
}

export default AddNewMovie