import { responsiveFontSizes } from "@material-ui/core";

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

//add a review to the movie
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


//need to modify this method to work!
export const removeFavourite = (username, id) => {
  fetch(`/api/users/${username}/favourites`, 
  {
    headers: { 
      'Content-Type': 'application/json'
    },
    method: 'get',
    body: JSON.stringify({username: username, id: id})
  }).then(res => res.json())
}

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

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getMovie = (id) => {
    return fetch(
       `/api/movies/${id}`,{
           headers: {
         'Authorization': window.localStorage.getItem('token')
      }//, body: JSON.stringify({})
    }).then(res => res.json());
  };



  export const getTMDBMovies = () => {
    return fetch(
       '/api/movies/tmdb/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };



  export const getTMDB = () => {

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

  /*export const getTMDBMovies = () => {
      //console.log("Get TMDB Movies Called")
    return fetch(
       '/api/movies/tmdb/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };*/