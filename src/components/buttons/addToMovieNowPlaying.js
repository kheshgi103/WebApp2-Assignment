import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToMovieNowPlayingButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToMovieNowPlaying = e => {
    e.preventDefault();
    context.AddToMovieNowPlaying(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToMovieNowPlaying}
    >
      Add to Movie Now Playing
    </button>
  );
};

export default AddToMovieNowPlayingButton;