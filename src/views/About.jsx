import { Grid, Typography } from "@material-ui/core";
import React from "react";

const About = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sx={12}>
        <Typography variant="subtitle1">About</Typography>
      </Grid>
    </Grid>
  );
};

export default About;
