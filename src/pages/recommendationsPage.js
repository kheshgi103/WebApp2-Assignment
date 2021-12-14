import React, { useContext } from "react";
import AddToWatchlistButton from "../components/buttons/addToWatchlist";
import PageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext'

const RecommendationsPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.Recommendations.filter((m) =>{
    return !("watchlist" in m);
  });
  return (
    <PageTemplate
      movies={ movies }
      title="Recommendations"
      action={(movie) =>{
        return <AddToWatchlistButton movie={movie} /> 
      }}
    />
  );
};

export default RecommendationsPage;