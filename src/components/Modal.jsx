import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  makeStyles,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { useForm } from "react-hook-form";

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
  const onSubmitForm = (data, e) => {
    // console.log(data);
    const newPlace = { ...data, coords: [-16.4957409, -68.1334839] };
    props.addPlace(newPlace);
    e.target.reset();
    props.handleClose();
  };

  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
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
                fullWidth
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
                fullWidth
                multiline
                rows={3}
              />
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
