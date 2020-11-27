import React from "react";
import { Avatar, Box, Divider, Drawer, makeStyles } from "@material-ui/core";
import Links from "./Links";

const styles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
  large: {
    width: theme.spacing(22),
    height: theme.spacing(22),
  },
}));

const Sidebar = (props) => {
  const classes = styles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
      anchor="left"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <div className={classes.toolbar}>fef</div>
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
