import React, { useState, createContext } from "react";
import { login, signup, addFavourite, getFavourites, removeFavourite, addReview } from "../api/movie-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");
  const [favourites , setFavourites] = useState([]);

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
      setFavourites(await getFavourites(username))
    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  //add favourites method
  const addToFavourites = (movie) => {
    setFavourites([...favourites,movie]);
    addFavourite(userName, movie.id);
  }

  const removeFromFavourites = (movie) => {
    console.log("Removed From Favourites!");
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
    removeFavourite(userName, movie.id); //this method needs to be made!
  }

  const addToReviews = (movie, review) =>
  {
      addReview(movie, review);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        addToFavourites,
        addToReviews,
        removeFromFavourites,
        favourites,
        userName,
        //username
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;