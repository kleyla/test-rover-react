import React from "react";
import {
  AppBar,
  Button,
  Icon,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  withStyles,
  Badge
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import purple from "@material-ui/core/colors/purple";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
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
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    },
    backgroundColor: theme.palette.common.white,
  },
}));
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
        <Typography variant="h6" className={classes.title} color="primary">
          <span className={classes.titleLight}>TEST</span>
          ROVER
        </Typography>
        <IconButton aria-label="button">
          <StyledBadge badgeContent={4} color="secondary">
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
