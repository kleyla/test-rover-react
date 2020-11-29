import { Box, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import AboutMe from "../components/AboutMe";
import Galeria from "../components/Galeria";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sx={12}>
          <Typography variant="subtitle1">About</Typography>
        </Grid>
      </Grid>
      <AboutMe />
      <br />
      <Galeria />
      <Box my={4}>
        <Divider />
        <Footer />
      </Box>
    </div>
  );
};

export default About;
