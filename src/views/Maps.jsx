import {
  Box,
  Button,
  Grid,
  makeStyles,
  Snackbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import LitleMap from "../components/LitleMap";
import Modal from "../components/Modal";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});
const Maps = () => {
  const classes = useStyles();
  const initPlaces = [
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
  const [places, setPlaces] = useState(initPlaces);
  const addPlace = (newPlace) => {
    console.log(newPlace);
    setPlaces([...places, newPlace]);
  };

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
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
          <Modal
            open={openModal}
            handleClose={handleClose}
            addPlace={addPlace}
            handleClickSnackbar={handleClickSnackbar}
          />
        </Box>
      </Grid>
      {places.map((place, index) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <LitleMap place={place} />
          </Grid>
        );
      })}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Place added successfully!
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Maps;
