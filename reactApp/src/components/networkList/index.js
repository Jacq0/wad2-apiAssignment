import React from "react";
import Network from "../networkCard";
import Grid from "@material-ui/core/Grid";

const NetworkList = ( {networks, action }) => {
  let networkCards = networks.map((n) => (
    <Grid key={n.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Network key={n.id} network={n} action={action} />
    </Grid>
  ));
  return networkCards;
};

export default NetworkList;