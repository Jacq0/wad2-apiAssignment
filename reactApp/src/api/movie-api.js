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
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
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