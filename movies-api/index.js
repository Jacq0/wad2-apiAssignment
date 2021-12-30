import './db';
import './seedData'
import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import usersRouter from './api/users';

dotenv.config();

const app = express();

const port = process.env.PORT;

//middleware stack!
app.use(express.json());

//movie and genre routers
app.use('/api/movies', moviesRouter);
app.use('/api/genres', genresRouter);

//Users router
app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});