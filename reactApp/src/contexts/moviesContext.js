import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState( {} ) 
    const [favorites, setFavorites] = useState( [] ) //keep this line here to not break the system!
    const [watchlist, setWatchlist] = useState( [] )

  const addToFavorites = (movie) => {
    setFavorites([...favorites,movie.id])
  };
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  //functions for adding and removing from the watchlist
  const addToWatchlist = (movie) => { 
    setWatchlist([...watchlist, movie.id])
    //console.log(watchlist)
  };
  const removeFromWatchlist = (movie) => {
    setWatchlist( watchlist.filter((movieId) => movieId !== movie.id))
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        addToWatchlist,
        removeFromFavorites,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;