import React, { useContext } from "react";
import AddToWatchlistButton from "../components/buttons/addToWatchlist";
import PageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext'

const MovieNowPlayingPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movieNowPlaying.filter((m) =>{
    return !("watchlist" in m);
  });
  console.log(movies)
  return (
    <PageTemplate
      movies={movies }
      title="Movie Now Playing"
      action={(movie) =>{
        return <AddToWatchlistButton movie={movie} /> 
      }}
    />
  );
};

export default MovieNowPlayingPage;