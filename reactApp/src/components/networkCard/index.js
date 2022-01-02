import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'

const useStyles = makeStyles({
  card: { maxWidth: 300 },
  media: { height: 300 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function NetworkCard(props) {
  const classes = useStyles();
  const network = props.network;
  return (
    <Card className={classes.card}>
      <CardHeader className={classes.header} name={network.name} />
      <CardMedia
        className={classes.media}
        image={
          network.logo_path
            ? `https://image.tmdb.org/t/p/w500/${network.logo_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {network.origin_country}
            </Typography>
          </Grid>
          <Grid item xs={6}>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="outlined" size="medium" color="primary">
          Network Info
        </Button>
      </CardActions>
    </Card>
  );
}