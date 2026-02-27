import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const AddNewMovie = () => {
        const navigate = useNavigate();
    const [title, setTitle] = useState()
    const [rating, setRating] = useState()
    const[disc, setDisc] = useState('')
    
        function AddMovie(){

        }

    
    return (
        <div className='container-fluid  bg-light p-5'>
            <h1 className='text-center mb-5'>Add New Movie</h1>
            <div className='border p-5 w-75 mx-auto bg-success'>
                <div class="mb-3">
                    <label for="exampleFormControlTitle" class="form-label">Title</label>
                    <input type="text" class="form-control mb-3" id="exampleFormControlTitle" onChange={(e)=> setTitle(e.target.value)} />

                    <label for="exampleFormControlRating" class="form-label">Rating</label>
                    <input type="number" class="form-control mb-4" id="exampleFormControlRating" onChange={(e)=> setRating(Number(e.target.value))} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlText" class="form-label">Description</label>
                    <textarea class="form-control" onChange={(e)=> setDisc(e.target.value)} id="exampleFormControlText" rows="3"></textarea>
                </div>
                <div className='text-center'>
                    <button type="button" class="btn btn-warning me-4" onClick={AddMovie}>Add Movie</button>
                    <button type="button" onClick={()=>{navigate('/')}} class="btn btn-dark">Back</button>
                </div>                                                                         

            </div>

        </div>
    )
}

export default AddNewMovie