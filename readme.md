# Assignment 2 - Web API.

Name: Jack Fitzpatrick

## Additional Features.
 
 + Implemented a favouriting system using the API.
 + Implemented reviewing routing to the system. Sadly the single movie page doesn't work yet :(

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
| /api/movies | Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/users | N/A | Login | N/A | N/A
| /api/users?action=register | N/A | Sign Up | N/A | N/A
| /api/users/{username}/favourites | Get Users Favourites | Add Favourite | N/A | Remove Favourite 
| /api/genres | Return list of Genres | N/A | N/A | N/A
| /api/movies/tmdb | Return movies discovery from TMDB | N/A | N/A | N/A
| /api/movies/tmdb/upcoming | Return upcoming from TMDB | N/A | N/A | N/A
| /api/shows/tmdb | Return shows discovery from TMDB | N/A | N/A | N/A

## Security and Authentication
Certain Pages (Mainly the TMDB ones and the favourite ones) Are inacessible to anyone who doesn't have a Bearer token (ie. someone who is not logged in to the site).

Most of the API routes are protected (Or at least they should be)

## Integrating with React App

I began with the base finished API labs, and gradually added pages and features onto it from my expanded Movies App Assignment (<https://github.com/Jacq0/wad2-expandedMoviesApp>).

Here is an example API call for the addFavourite function, which had to be modified to work with my API and the user account:

~~~Javascript
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
~~~

This is just one example of the many modifications and changes made to get the custom API working with this React Application.

Before it used to simply store the favourites in memory, which would be lost on a reload. Now an API call is made to the Users favourites and it is stored in the User within the DB. An improvement for sure!

## Extra features

Created an API link and template for the Shows pages created for my Web App Dev React Assignment 1. This was very similar to the movies one already implemented!

The first assignment can be found here: <https://github.com/Jacq0/wad2-expandedMoviesApp>

## Independent learning

Nothing out of the ordinary added so far. Most of the time was spent debugging and getting the API working with the React Application. This is something to expand the Assignment with in the future!