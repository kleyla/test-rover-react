import React, { useState } from "react";
import { Box, Button, Grid, Snackbar, Typography } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import LitleMap from "../components/LitleMap";
import Modal from "../components/Modal";
import { useStyles } from "../hooks/useStyles";
import { initialPlaces } from "../mockData/initialPlaces";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Maps = () => {
  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [places, setPlaces] = useState(initialPlaces);

  const [openModal, setOpenModal] = useState(false);
  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const addPlace = (newPlace) => {
    console.log(newPlace);
    setPlaces([...places, newPlace]);
  };

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
          <Typography variant="subtitle1" className={classes.titleMap}>
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
