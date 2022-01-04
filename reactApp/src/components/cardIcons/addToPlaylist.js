import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";

const AddToPlaylistIcon = ({ movie }) => {
  //const context = useContext(MoviesContext);
  const context = useContext(AuthContext);

  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    context.addToFavourites(movie);
    //context.addToFavorites(movie);
  }; //unneeded for now
  
  return (
    <IconButton aria-label="add to playlist" onClick={handleAddToPlaylist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;