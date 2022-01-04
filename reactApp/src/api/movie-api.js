import { responsiveFontSizes } from "@material-ui/core";

//API calls for login and signup
export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password }) //this doesn't work :(
    }).then(res => res.json())
};

//API calls to add favourites and get favourites, both work well!
export const addFavourite = (username, id) => {
  return fetch(`/api/users/${username}/favourites`, 
  {
    headers: { 
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({username: username, id: id})
  }).then(res => res.json())
};

export const getFavourites = (username) => {
  return fetch(`/api/users/${username}/favourites`
  ).then((res) =>{
    if(!res.ok){
      throw new Error(res.json().message);
    }
    return res.json();
  }).catch((error) => {
    throw error
  });
}

//add a review to the movie, unfinished, 
export const addReview = (movie, review) =>
{
    return fetch(`/api/movies/${movie.id}/reviews`,
    {
      headers: {
        'Content-Type' : 'application/json'
      },
      method: 'post',
      body: JSON.stringify({movie: movie, review: review})
    }).then(res => res.json())
}


//need to modify this method to work! Unfinished
export const removeFavourite = (username, id) => {
  fetch(`/api/users/${username}/favourites`, 
  {
    headers: { 
      'Content-Type': 'application/json'
    },
    //method: 'get',
    body: JSON.stringify({username: username, id: id})
  }).then(res => res.json())
}

//API call to get the full list of movies, works well
export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  //this unfortuantely doesnt work too well :()
  export const getMovie = (movie) => {
    const [, idPart] = movie.id;
    const { id } = idPart;
    return fetch(
      `/api/movies/${id}`,
      {
        headers: 
        {
      'Authorization': window.localStorage.getItem('token')
   }
 }
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  //return the genres from our API to the filter list! Works!
  export const getGenres = () =>
  {
    return fetch(`/api/genres/`).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  }

//I couldn't for the life of me get TMDB to work with my API, these connect with the API call in the API but they give a parse error on return I cannot find the source of
  export const getTMDBMovies = () => {
    return fetch(
       '/api/movies/tmdb',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getTMDBUpcomingMovies = () => {
    console.log(fetch(
        '/api/movies/tmdb/upcoming' ,{
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(res => res.json()))
      return fetch(
          '/api/movies/tmdb/upcoming' /*,{
              headers: {
                  'Content-Type': 'json'
              }
          }*/
      ).then(res => res.json())
  }

  export const getTMDBShows = () => {
    return fetch(
       '/api/shows/tmdb',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };