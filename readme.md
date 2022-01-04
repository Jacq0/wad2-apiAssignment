# Assignment 2 - Web API.

Name: Jack Fitzpatrick

## Additional Features.
 
 + Implemented a favouriting system using the API

## Installation Requirements

To run this app you will need:
+ Node (Version 14.17.6 was used for this assignment): <https://nodejs.org/en/>
+ NPM (6.14.15 was used): <https://www.npmjs.com/>
+ MongoDB (5.0.2 was used): <https://www.mongodb.com/>

Download and install instructions for these prerequisites can be found on the linked sites!

Now you can clone the Repo:

```bat
git clone https://github.com/Jacq0/wad2-expandedMoviesApp
```

and install the application:

```bat
git install
```

## API Configuration
Before running the app you must configure mongo, set it up and give it a default DB folder for the API (This will be used to store seeded data that can be called from the API, as well as user data). 

A .env file is also required, create one with the following fields (Replace any <> wrapped comments with your own variables):

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=<Link to mongo database>
SEED_DB=True
SECRET=<Your JWT Secret Key>
TMDB_KEY=<Your TMDB API Key>
```

Finally make sure to run both the API (movie-api) and the React App (reactApp) using: 

```bat
npm start
``` 

## API Design
The API can make the following calls: 

| API Call |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/users/{username}/favourites | Get Users Favourites | Add Favourite | N/A | Remove Favourite 
| ... | ... | ... | ... | ...
| ... | ... | ... | ... | ...
| ... | ... | ... | ... | ...


## Security and Authentication
Certain Pages (Mainly the TMDB ones and the favourite ones) Are inacessible to anyone who doesn't have a Bearer token (ie. someone who is not logged in to the site).

Most of the API routes are protected (Or at least they should be)

## Integrating with React App

I began with the base finished API labs, and gradually added pages and features onto it from my expanded Movie App Assignment (<https://github.com/Jacq0/wad2-expandedMoviesApp>).

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

~~~

## Extra features

Created an API link and template for the Shows pages craeted for my Web App Dev React Assignment 1. This was very similar to the movies one already implemented!

The first assignment can be found here: <https://github.com/Jacq0/wad2-expandedMoviesApp>

## Independent learning

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  