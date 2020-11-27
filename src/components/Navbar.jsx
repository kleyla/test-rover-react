import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import purple from "@material-ui/core/colors/purple";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  titleLight: {
    color: purple[200],
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} color="transparent">
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
        <Typography variant="h6" className={classes.title} color="primary">
          <span className={classes.titleLight}>TEST</span>
          KAREN
        </Typography>
        <Button variant="text" color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
