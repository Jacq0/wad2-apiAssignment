import express from 'express';
import uniqid from 'uniqid'
import asyncHandler from 'express-async-handler';
import {getTVShows, getTVShow} from '../tmdb-api';

const router = express.Router(); 
/*router.get('/', async (req, res) => {
    console.log("Wrong place!");
});*/

//get discover TV shows from TMDB
router.get('/tmdb', asyncHandler(async (req, res) => {
    const shows = await getTVShows();
    console.log(res.json(shows));
    res.status(200).json(shows);
}));

// Get show details
/*router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const movie = await movieModel.findByMovieDBId(id);
    if (movie) {
        res.status(200).json(movie);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));*/

export default router;