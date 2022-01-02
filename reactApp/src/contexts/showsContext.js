/*import React, { useState } from "react";

export const ShowsContext = React.createContext(null);

const ShowsContextProvider = (props) => {
    const [myReviews, setMyReviews] = useState( {} ) 
    const [favorites, setFavorites] = useState( [] ) //keep this line here to not break the system!
    const [watchlist, setWatchlist] = useState( [] )

  const addToFavorites = (show) => {
    setFavorites([...favorites,show.id])
  };
  // We will use this function in a later section
  const removeFromFavorites = (show) => {
    setFavorites( favorites.filter(
      (mId) => mId !== show.id
    ) )
  };

  //functions for adding and removing from the watchlist
  const addToWatchlist = (show) => { 
    setWatchlist([...watchlist, show.id])
    //console.log(watchlist)
  };
  const removeFromWatchlist = (show) => {
    setWatchlist( watchlist.filter((showId) => showId !== show.id))
  };

  const addReview = (show, review) => {
    setMyReviews( {...myReviews, [show.id]: review } )
  };

  return (
    <ShowsContext.Provider
      value={{
        favorites,
        addToFavorites,
        addToWatchlist,
        removeFromFavorites,
        addReview,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContextProvider;*/