import React from 'react';
import { useContext} from 'react';
import { MoviesContext } from '../moviesContext';
import { TMDBContext } from '../contexts/tmdbContext';
//TESTING
//import {getTMDBMovies} from './api/movie-api';

export const PublicPage = () => {
    return <h2>Public page</h2>
 }
 export const Movies = () => {
    const context = useContext(MoviesContext);
    //console.log(getTMDBMovies);

    return <>
        <h2>Movies Data </h2>
        <div>
            {context.movies.results.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
        </div>
    </>
}
/*export const TMDBUpcoming = () => {
    //console.log("Pages.js Context call");
    //console.log(JSON.stringify(TMDBContext));
    const context = useContext(TMDBContext);
    
    return <>
        <h2>Upcoming TMDB Data </h2>
        <div>
            {context.movies.results.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
        </div>
    </>
}*/
 export const Profile = () => {
    return <h2>My Profile </h2>
}
 export const HomePage = () => {
     return  <h2>Home page</h2>
 }
 