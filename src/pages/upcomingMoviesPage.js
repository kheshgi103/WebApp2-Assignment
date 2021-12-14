import React, { useContext } from "react";
import AddToWatchlistButton from "../components/buttons/addToWatchlist";
import PageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext'

const UpcomingMoviesPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.upcoming.filter((m) =>{
    return !("watchlist" in m);
  });
  return (
    <PageTemplate
      movies={ movies }
      title="Upcoming Movies"
      action={(movie) =>{
        return <AddToWatchlistButton movie={movie} /> 
      }}
    />
  );
};

export default UpcomingMoviesPage;