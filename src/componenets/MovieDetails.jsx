import { useParams } from "react-router-dom";
import data from "../data";
import { useNavigate } from "react-router-dom";


const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  

  const movie = data.find((m)  => m.id === Number(id));

  return (
    
        <div className="container text-center bg-dark p-5 mt-5 ">
          
      <h1 className="text-warning fw-bold">{movie.title}</h1>
      <hr className="text-white" />
      <h5 className="text-danger">Rating: {'⭐'.repeat(movie.rating)}</h5>
      <div className="p-5">
      <p className="text-white fs-4">{movie.description}</p>

      </div>
       <button type="button" onClick={()=>{navigate('/')}} class="btn btn-dark">Back</button>
    </div>
    
  );
};

export default MovieDetails;