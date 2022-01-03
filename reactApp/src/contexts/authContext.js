import React, { useState, createContext } from "react";
import { login, signup, addFavourite, getFavourites } from "../api/movie-api";

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
    console.log("Removed From Favourites!")
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        addToFavourites,
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