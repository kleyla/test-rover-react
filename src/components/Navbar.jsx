import React from "react";
import {
  AppBar,
  Button,
  Icon,
  IconButton,
  Toolbar,
  Typography,
  withStyles,
  Badge,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import purple from "@material-ui/core/colors/purple";
import { Link } from "react-router-dom";

import { useStyles } from "../hooks/useStyles";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="primary"
          aria-label="Menu"
          className={classes.menuButton}
          onClick={() => {
            props.accionAbrir();
          }}
        >
          <MenuIcon />
        </IconButton>
        <Link to="/" className={classes.titleNavbar}>
          <Typography variant="h6" color="primary">
            <span className={classes.titleLight}>TEST</span>
            ROVER
          </Typography>
        </Link>
        <IconButton aria-label="button">
          <StyledBadge badgeContent={4} color="error">
            <Icon color="primary">notifications</Icon>
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="button">
          <Icon color="primary">person</Icon>
        </IconButton>
        <Button variant="text" color="primary">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
