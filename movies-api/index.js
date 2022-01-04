import './db';
import './seedData'
import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import usersRouter from './api/users';
import showsRouter from './api/shows';
// replace existing import with passport strategy​
import passport from './authenticate';

dotenv.config();

const errHandler = (err, req, res, next) => {
    /* if the error in development then send stack trace to display whole error,
    if it's in production then just send error message  */
    if(process.env.NODE_ENV === 'production') {
      return res.status(500).send(`Something went wrong!`);
    }
    res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
  };

const app = express();

const port = process.env.PORT;

//middleware stack!
app.use(express.json());

  // replace app.use(session([... with the following:
app.use(passport.initialize());

//movie and genre routers
// Add passport.authenticate(..)  to middleware stack for protected routes​
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/shows', passport.authenticate('jwt', {session: false}) ,showsRouter); //import the API call for the shows that I implemented for assignment 1
app.use('/api/genres', genresRouter);

//Users router
app.use('/api/users', usersRouter);

//use the error handler
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});