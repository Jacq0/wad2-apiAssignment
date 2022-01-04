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

and install the application

```bat
git install
```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| ... | ... | ... | ... | ...

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

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

. . Briefly explain any non-standard features, functional or non-functional, developed for the app. 

Created an API link and template for the Shows pages craeted for my Web App Dev React Assignment 1. This was very similar to the movies one already implemented!

## Independent learning

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  