import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import LitleMap from "../components/LitleMap";
import Modal from "../components/Modal";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});
const Maps = () => {
  const classes = useStyles();
  const places = [
    {
      title: "Plaza 24 de Septiembre, Santa Cruz Bolivia",
      coords: [-17.7834936, -63.1820853],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, eveniet?",
    },
    {
      title: "Plaza Murillo, La Paz Bolivia",
      coords: [-16.4957409, -68.1334839],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, eveniet?",
    },
    {
      title: "Copacabana, La Paz Bolivia",
      coords: [-16.1629986, -69.0899133],
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, eveniet?",
    },
  ];
  const [openModal, setOpenModal] = useState(false);
  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box display="flex" flexDirection="row">
          <Typography variant="subtitle1" className={classes.title}>
            Maps
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleClickOpen()}
          >
            Add new place
          </Button>
          <Modal open={openModal} handleClose={handleClose} />
        </Box>
      </Grid>
      {places.map((place, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <LitleMap place={place} />;
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Maps;
