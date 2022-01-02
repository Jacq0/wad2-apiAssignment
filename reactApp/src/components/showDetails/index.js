import React, {useState} from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CalendarIcon from "@material-ui/icons/DateRange";
import ClipboardIcon from "@material-ui/icons/Movie";
import MonetizationIcon from "@material-ui/icons/MonetizationOn";
import StarRate from "@material-ui/icons/StarRate";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
//import MovieReviews from "../movieReviews";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ShowDetails = ({ show }) => {  // Don't miss this!
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {show.overview}
      </Typography>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Genres" className={classes.chip} color="primary" />
        </li>
        {show.genres.map((g) => ( //construct movie list of genres
          <li key={g.name}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.root}>
        <Chip icon={<CalendarIcon />} label={`${show.number_of_seasons} Seasons`} />
        <Chip icon={<ClipboardIcon />} label={`${show.number_of_episodes} Episodes`} />
        <Chip
          icon={<StarRate />}
          label={`${show.vote_average} (${show.vote_count})`}
        />
        <Chip label={`First Aired: ${show.first_air_date}`} />
        </Paper>
      
      <Paper component="ul" className={classes.root}>
          <li>
      <Chip label="Production Companies" className={classes.chip} color="primary"/>
      </li>
        
    {show.production_companies.map((pc) => (//construct list of production countries
    <li key={pc.name}>
     <Chip label={pc.name} className={classes.chip} />
    </li>   
    ))}
      </Paper>
      
      {show.seasons.map((season) => (//construct list of seasons and deatils
    <li key={season.name}>
        <Paper component="ul" className={classes.root}>
            <Chip label={season.name} className={classes.chip} />
            <Chip label={`Began: ${season.air_date}`} className={classes.chip} />
            <Chip label={`Episodes:${season.episode_count}`} className={classes.chip} /></Paper>
    </li>   
    ))}
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        
      </Drawer>
    </>
  );
};
export default ShowDetails ;