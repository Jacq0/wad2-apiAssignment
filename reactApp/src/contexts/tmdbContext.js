import React, { useState, createContext, useEffect, useReducer } from "react";
//import { getTMDBMovies } from "./api/movie-api";
import { getTMDB } from "../api/movie-api";

export const TMDBContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result};
    default:
      return state;
  }
};

const TMDBContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: []});
  //const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getTMDB().then(result => {
        //console.log("TMDB CONTEXT CALLED")
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  return (
    <TMDBContext.Provider
      value={{
        movies: state.movies,
        //setAuthenticated
      }}
    >
      {props.children}
    </TMDBContext.Provider>
  );
};

export default TMDBContextProvider