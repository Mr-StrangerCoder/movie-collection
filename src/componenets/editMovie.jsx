import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const EditMovie = ({ movies, setMovies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  const [title, setTitle] = useState(movie.title);
  const [rating, setRating] = useState(movie.rating);
  const [description, setDescription] = useState(movie.description);

  const handleUpdate = () => {
    const updatedMovies = movies.map((m) =>
      m.id === Number(id)
        ? { ...m, title, rating, description }
        : m
    );

    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));

    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>Edit Movie</h2>

      <input
        className="form-control mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />

      <input
        type="number"
        className="form-control mb-3"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        placeholder="Rating"
      />

      <textarea
        className="form-control mb-3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />

      <button className="btn btn-success me-3" onClick={handleUpdate}>
        Update Movie
      </button>

      <button className="btn btn-dark" onClick={() => navigate("/")}>
        Cancel
      </button>
    </div>
  );
};

export default EditMovie;