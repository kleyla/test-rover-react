import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

import LitleBox from "../components/LitleBox";
import MapGeneral from "../components/MapGeneral";
import { useStyles } from "../hooks/useStyles";
import { boxes } from "../mockData/boxes";

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box>
            <Typography variant="subtitle1">Home</Typography>
          </Box>
        </Grid>
        {boxes.map((cajita, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <LitleBox
                icon={cajita.icon}
                text={cajita.text}
                cantidad={cajita.cantidad}
                color={cajita.color}
              />
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <Box>
            <Typography variant="h6" className={classes.title}>
              Map with react-leaflet
            </Typography>
            <MapGeneral />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
