import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToRecommendationsButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToRecommendations = e => {
    e.preventDefault();
    context.handleAddToRecommendations(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToRecommendations}
    >
      Add to Recommendations
    </button>
  );
};

export default AddToRecommendationsButton;