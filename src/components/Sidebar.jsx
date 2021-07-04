import React from "react";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Link,
  Typography,
} from "@material-ui/core";

import Links from "./Links";
import { useStyles } from "../hooks/useStyles";

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
      <div className={classes.toolbarSidebar}>
        <Typography variant="h5">
          <Link
            href="https://github.com/kleyla"
            target="_blank"
            rel="noreferrer"
            className={classes.textWhite}
          >
            KAREN
          </Link>
        </Typography>
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
