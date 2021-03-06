import React from "react";
import {
  Box,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Typography,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

import { useStyles } from "../hooks/useStyles";
import { pictures } from "../mockData/pictures";

const Galeria = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Box my={2}>
          <Typography variant="h5" color="primary" align="center">
            Pictures
          </Typography>
        </Box>
      </Grid>
      {pictures.map((item, index) => {
        return (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <GridList cellHeight="auto" cols={1} className={classes.gridList}>
              <GridListTile cols={1}>
                <img
                  src={`${process.env.PUBLIC_URL}/me/${item.src}`}
                  alt="girls"
                  className={classes.imagen}
                />
                <GridListTileBar
                  title={item.title}
                  subtitle={<span>by: {item.by}</span>}
                  actionIcon={
                    <IconButton aria-label="info" className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            </GridList>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Galeria;
