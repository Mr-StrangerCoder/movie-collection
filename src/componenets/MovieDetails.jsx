import { useParams } from "react-router-dom";
import data from "../data";

const MovieDetails = () => {
  const { id } = useParams();

  const movie = data.find((m) => m.id === Number(id));

  if (!movie) {
    return <h2>Movie Not Found</h2>;
  }

  return (
    <div className="container text-center">
      <h1>{movie.title}</h1>
      <h3>Rating: {movie.rating}</h3>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetails;