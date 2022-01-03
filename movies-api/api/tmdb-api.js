import fetch from 'node-fetch';

export const getUpcomingMovies = () => {
    return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
    ).then((response) => {
        console.log(response);
        if (!response.ok) {
            throw new Error(response.json().message);
        }
        console.log(response.json());
        return JSON.stringify(response.json());
    })
        .catch((error) => {
            throw error
        });
};