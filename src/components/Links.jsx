import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Icon,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icono: {
    color: "white",
  },
}));
const Links = () => {
  const classes = useStyles();
  const links = [
    { icon: "home", text: "Home", route: "/" },
    { icon: "info", text: "About", route: "/about" },
    { icon: "maps", text: "Maps", route: "/maps" },
  ];

  return (
    <div>
      <List component="nav">
        {links.map((link, index) => {
          return (
            <ListItem button component={Link} to={link.route} key={index}>
              <ListItemIcon>
                <Icon className={classes.icono}>{link.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
          );
        })}
        <Divider />
      </List>
    </div>
  );
};

export default Links;
