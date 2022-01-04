import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { AuthContext } from "../contexts/authContext";
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteMoviesPage = () => {
  const { favourites } = useContext(AuthContext);

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={favourites}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FavoriteMoviesPage;