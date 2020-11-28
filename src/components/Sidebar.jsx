import React from "react";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Links from "./Links";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShink: 0,
  },
  drawerPaper: {
    width: 240,
    background: theme.palette.primary.main,
    color: "white",
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  large: {
    width: theme.spacing(22),
    height: theme.spacing(22),
  },
}));

const Sidebar = (props) => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <div className={classes.toolbar}>
        <Typography variant="h5">KAREN</Typography>
      </div>
      <Box display="flex" justifyContent="center" py={2}>
        <Avatar
          alt="Karen pic"
          src={`${process.env.PUBLIC_URL}/me1.jpg`}
          className={classes.large}
        />
      </Box>
      <Divider />
      <Links />
    </Drawer>
  );
};

export default Sidebar;
