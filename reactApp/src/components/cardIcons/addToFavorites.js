import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext"; //changed from the movie context!
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToFavoritesIcon = ({ movie }) => {
  const context = useContext(AuthContext);

  const handleAddToFavorites = (e) => {
    e.preventDefault();
    context.addToFavourites(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavorites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavoritesIcon;