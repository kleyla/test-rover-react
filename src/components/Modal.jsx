import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useForm } from "react-hook-form";
import DraggableMap from "./DraggableMap";
import "./Modal.css";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Modal = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const [coords, setCoords] = useState([-16.4957409, -68.1334839]);
  const onSubmitForm = (data, e) => {
    const newPlace = { ...data, coords: coords };
    // console.log(newPlace);
    props.addPlace(newPlace);
    e.target.reset();
    props.handleClose();
  };
  const getCoords = (coords) => {
    setCoords(coords);
  };

  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      fullWidth
    >
      <DialogTitle id="customized-dialog-title" className={classes.root}>
        <Typography>Add new place</Typography>
        <IconButton onClick={props.handleClose} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmitForm)}
        className={classes.form}
      >
        <DialogContent dividers>
          <div>
            <div>
              <TextField
                id="title"
                name="title"
                label="Title"
                variant="outlined"
                error={errors.title ? true : false}
                helperText={errors.title ? errors.title.message : ""}
                inputRef={register({
                  required: { value: true, message: "Campo requerido" },
                })}
                className="fullWidth"
              />
            </div>
            <div>
              <TextField
                id="description"
                name="description"
                label="Description"
                variant="outlined"
                error={errors.description ? true : false}
                helperText={
                  errors.description ? errors.description.message : ""
                }
                inputRef={register({
                  required: { value: true, message: "Campo requerido" },
                })}
                className="fullWidth"
                multiline
                rows={3}
              />
            </div>
            <div>
              <DraggableMap getCoords={getCoords} />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button type="submit" autoFocus color="primary">
            Save changes
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default Modal;
