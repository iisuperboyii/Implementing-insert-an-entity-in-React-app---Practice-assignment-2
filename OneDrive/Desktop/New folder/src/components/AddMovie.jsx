import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './AddMovie.css';
function AddMovie() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    year: "",
    synopsis: "",
    poster: "",
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add a New Movie</h1>
      <form className="space-y-4">
        <input
          type="text"
          name="title"
          value={movie.title}
          onChange={handleChange}
          placeholder="Movie Title"
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="director"
          value={movie.director}
          onChange={handleChange}
          placeholder="Director"
          className="border p-2 w-full"
        />
        <select
          name="genre"
          value={movie.genre}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
        <input
          type="number"
          name="year"
          value={movie.year}
          onChange={handleChange}
          placeholder="Release Year"
          className="border p-2 w-full"
        />
        <textarea
          name="synopsis"
          value={movie.synopsis}
          onChange={handleChange}
          placeholder="Synopsis"
          className="border p-2 w-full"
        ></textarea>
        <input
          type="url"
          name="poster"
          value={movie.poster}
          onChange={handleChange}
          placeholder="Poster Image URL"
          className="border p-2 w-full"
        />

        <div className="flex space-x-2">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMovie;